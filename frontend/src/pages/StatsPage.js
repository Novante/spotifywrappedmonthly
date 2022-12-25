import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import ScrollingArtists from '../components/ScrollingArtists'


const StatsPage = (props) => {

    const [artists, setArtists] = useState([])
    const [songs, setSongs] = useState([])
    const [pxArtistImages, setpxArtistImages] = useState([])
    const [containerHeight, setContainerHeight] = useState(0)
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
        if (artists !== undefined){
            select320x320Images()
        }
    }, [artists])



    useEffect(()=> {
        if (pxArtistImages !== []){
            console.log(pxArtistImages.length)
        }
    },[pxArtistImages])

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

    const select320x320Images = () => {
        let height
        let width
        let tempArr = []
        for (let i = 0; i < artists.length; i++) {
            if (artists[i].images[1].width === 320){
                let img = new Image()
                img.onload = function (){
                    height = img.naturalHeight
                    width = img.naturalWidth
                    if (width === 320 && !pxArtistImages.includes(img.src)){
                        setpxArtistImages(pxArtistImages => [...pxArtistImages, img.src])
                    }
                }
                img.src = artists[i].images[1].url







            }

            // setpxArtistImages([...tempArr])
        }

        if(pxArtistImages.length % 4 !== 0){
            let imagesToAdd = 4 - ((pxArtistImages.length) % 4)
            console.log('num', imagesToAdd)
            for (let j = 0; j < imagesToAdd; j++) {
                let randomNumber = Math.floor(Math.random() * pxArtistImages.length)
                let fillerPhoto = pxArtistImages[randomNumber]
                setpxArtistImages(pxArtistImages => [...pxArtistImages, fillerPhoto])

            }
        }
    }

    // {artists && (
    //     artists?.items.map((artist, index) => {
    //
    //         return <img className="scrollingPastArtistImage" src={artist.images[1].url} key={index}></img>
    //     })
    // )}

    useEffect(() => {
        const timer = setTimeout(() => {
            autoScrollPastArtists()
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    const autoScrollPastArtists = () => {
        let interval
        interval = setInterval(() => {
            let scrollSpeed = 1
            let windowLocation = window.scrollY
            // console.log(windowLocation)

            if (windowLocation <= 20) {
                window.scrollBy(0, 1)
            } else if (windowLocation > 20 && windowLocation <= 60) {
                window.scrollBy(0, 2)
            } else if (windowLocation > 60 && windowLocation <= 120) {
                window.scrollBy(0, 3)
            } else if (windowLocation > 120 && windowLocation <= 180) {
                window.scrollBy(0, 4)
            } else if (windowLocation > 180 && windowLocation <= 240) {
                window.scrollBy(0, 5)
            } else if (windowLocation > 240 && windowLocation <= 2000) {
                window.scrollBy(0, 5)
            }
        }, 1)
    }

    return (
        <div id="page" className="statsPageContainer">
                <WelcomeMessage token={props.token}></WelcomeMessage>
                <LoginMessage></LoginMessage>
                {/*<div ref={testRef} id="scrollingPastArtistImageContainer" className="scrollingPastArtistImageContainer">*/}
                {/*    {pxArtistImages.map((img, index) => {*/}
                {/*        return <img style={{marginTop: -4}} key={index} src={img}></img>*/}
                {/*    })}*/}
                {/*    {pxArtistImagesLength}*/}
                {/*</div>*/}
                <ScrollingArtists setContainerHeight={setContainerHeight} pxArtistImages={pxArtistImages}></ScrollingArtists>
            {containerHeight}

        </div>


    )
}
export default StatsPage
