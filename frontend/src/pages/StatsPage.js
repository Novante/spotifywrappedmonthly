import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import ScrollingArtists from '../components/ScrollingArtists'
import ScrollPage from "./ScrollPage";
import FetchCurrentTrack from "../components/FetchCurrentTrack";
import FetchRelatedArtists from "../components/FetchRelatedArtists";


const StatsPage = (props) => {

    const [allArtists, setAllArtists] = useState(0)
    const [artists, setArtists] = useState(0)
    const [songs, setSongs] = useState([])
    const [pxArtistImages, setpxArtistImages] = useState([])
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
        if (artists !== 0) {
            console.log(artists)
            // select320x320Images()
            setAllArtists(artists)
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
        const json = await artistList.json()
        setArtists(json.items)

    }

    const fetchSongs = async () => {
        songList = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            })
        })
        const json = await artistList.json()
        setSongs(json.items)
    }

    // function loadImg(imgsrc, callback) {
    //     let img = new Image()
    //     img.onload = callback // byt till function sen
    //     img.src = imgsrc
    //     if (img.naturalHeight === 320 && img.naturalWidth === 320) {
    //         return img.src
    //     } else {
    //         return null
    //     }
    // }
    //
    // const select320x320Images = () => {
    //     let tempArr = []
    //     for (let i = 0; i < artists.length; i++) {
    //         const img = loadImg(artists[i].images[1].url)
    //         if (img !== null) {
    //             tempArr.push(img)
    //         }
    //     }
    //
    //     setpxArtistImages(tempArr)
    //     if (tempArr.length % 3 !== 0) {
    //         let remainder = 3 - tempArr.length % 3
    //         console.log('remainder' + remainder)
    //         for (let i = 0; i < remainder; i++) {
    //             tempArr.push(tempArr[Math.floor(Math.random() * tempArr.length)])
    //         }
    //     }
    //     setFiltered(tempArr)
    // }

    return (
        <div className="statsPageWrapper">
        <div id="page" className="statsPageContainer">
            <WelcomeMessage token={props.token}></WelcomeMessage>
            <LoginMessage></LoginMessage>

            <ScrollingArtists filtered={props.fetchedArtist}
                              pxArtistImages={pxArtistImages}></ScrollingArtists>

        </div>

            <ScrollPage topArtist={allArtists[0]} allArtists={allArtists}></ScrollPage>

        </div>


    )
}
export default StatsPage
