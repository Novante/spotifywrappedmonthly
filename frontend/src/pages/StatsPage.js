import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import ScrollingArtists from '../components/ScrollingArtists'


const StatsPage = (props) => {

    const [artists, setArtists] = useState([])
    const [songs, setSongs] = useState([])
    const [pxArtistImages, setpxArtistImages] = useState([])
    const [containerHeight, setContainerHeight] = useState()
    const [filtered, setFiltered] = useState([])
    let artistList = ""
    let songList = []
    let testRef = useRef(null)
    let length = 0


    useEffect(() => {
        fetchArtists()
        fetchSongs()

    }, [])

    useEffect(() => {
        console.log(artists)
        console.log(songs)
        if (artists !== undefined) {
            select320x320Images()
        }
    }, [artists])


    useEffect(() => {
        if (pxArtistImages !== []) {
            console.log(pxArtistImages.length)
        }
    }, [pxArtistImages])

    const fetchArtists = async () => {
        artistList = await fetch('https://api.spotify.com/v1/me/top/artists?limit=50', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            })
        })
            .then(res => res.json())
            .then(res => setArtists([...res.items]))
    }

    const fetchSongs = async () => {
        songList = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            })
        })
            .then(res => res.json())
            .then(res => setSongs([...res.items]))
    }

    function loadImg(imgsrc, callback) {
        let img = new Image()
        img.onload = callback
        img.src = imgsrc
        if (img.naturalHeight === 320 && img.naturalWidth === 320) {
            return img.src
        } else {
            return null
        }
    }

    const select320x320Images = () => {
        let tempArr = []
        for (let i = 0; i < artists.length; i++) {
            const img = loadImg(artists[i].images[1].url)
            if (img !== null) {
                tempArr.push(img)
            }
        }
        if (tempArr.length % 4 !== 0) {
            for (let i = 0; i < tempArr.length % 4; i++) {
                tempArr.push(tempArr[Math.floor(Math.random() * tempArr.length)])
            }
        }
        setFiltered(tempArr)
    }


    useEffect(() => {
        if (containerHeight !== 0) {
            const timer = setTimeout(() => {
                autoScrollPastArtists()
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [containerHeight])

    const autoScrollPastArtists = () => {
        let interval
        interval = setInterval(() => {
            let scrollSpeed = 1
            let windowLocation = window.scrollY
            let containerBottomLocation = 1300 + containerHeight
            console.log(containerBottomLocation)

            if (windowLocation <= 20) {
                window.scrollBy(0, 1)
            } else if (windowLocation > 20 && windowLocation <= 60) {
                window.scrollBy(0, 2)
            } else if (windowLocation > 60 && windowLocation <= 120) {
                window.scrollBy(0, 3)
            } else if (windowLocation > 120 && windowLocation <= 180) {
                window.scrollBy(0, 4)
            } else if (windowLocation > 180 && windowLocation <= containerBottomLocation) {
                window.scrollBy(0, 5)
            }
        }, 1)
    }

    return (
        <div id="page" className="statsPageContainer">
            <WelcomeMessage token={props.token}></WelcomeMessage>
            <LoginMessage></LoginMessage>

            <ScrollingArtists filtered={filtered} setContainerHeight={setContainerHeight}
                              pxArtistImages={pxArtistImages}></ScrollingArtists>
            {containerHeight}

        </div>


    )
}
export default StatsPage
