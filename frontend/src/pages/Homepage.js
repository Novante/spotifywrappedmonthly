import {useEffect, useState} from "react";
import FetchTopArtists from "../components/FetchTopArtists";
import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import DataCard from "../components/DataCard";
import FetchTopSongs from "../components/FetchTopSongs";
import {useNavigate} from "react-router-dom";
import fetchTopArtists from "../components/FetchTopArtists";
import fetchTopSongs from "../components/FetchTopSongs";

const Homepage = (props) => {
    const [authorized, setAuthorized] = useState('')
    let authed = null

    const nav = useNavigate()

    useEffect(() => {
        if (window.location.href.includes('token')) {
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const token = urlParams.get('token')
            getInfo(token)
            console.log(window.location.href)
            console.log(token)
            localStorage.setItem('token', token)
            props.setToken(token)

        }

    }, [window.location.href])

    useEffect(() => {
        if (props.fetchedArtists !== null && props.fetchedRelatedArtists !== null && props.fetchedTopTracks) {
            nav('/stats')
        }
    }, [props.fetchedArtists, props.fetchedRelatedArtists, props.setFetchedTopTracks])

    const getInfo = async (token) => {
        const res = await fetch(`http://localhost:3001/getinfo?token=${token}`)
        const json = await res.json()
        console.log(json)

        const res2 = await fetch(`http://localhost:3001/getrelatedartists?token=${token}&artistId=${json.items[0].id}`)
        const json2 = await res2.json()

        const res3 = await fetch(`http://localhost:3001/gettoptracks?token=${token}`)
        const json3 = await res3.json()

        props.setFetchedArtist(json.items)
        props.setFetchedRelatedArtists(json2)
        props.setFetchedTopTracks(json3)
        authed = true
    }


    return (
        <div className="pageContainer">
            {localStorage.getItem('authed') !== 'true' && (
                <>
                    <WelcomeMessage></WelcomeMessage>
                    <LoginMessage></LoginMessage>
                    <AuthorizeSpotify setAuthorized={setAuthorized}></AuthorizeSpotify>

                </>
            )
            }


        </div>

    )

}


export default Homepage
