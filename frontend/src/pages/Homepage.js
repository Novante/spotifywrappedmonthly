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

    useEffect( () => {
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
        if (props.fetchedArtists !== null){
                nav('/stats')
        }
    },[props.fetchedArtists])

    const getInfo = async (token) => {
        const res = await fetch(`http://localhost:3001/getinfo?token=${token}`)
        const json = await res.json()
        console.log(json)

        const res2 = await fetch(`http://localhost:3001/getrelatedartists?token=${token}&artistId=${json.items[0].id}`)
        const json2 = await res2.json()

        props.setFetchedArtist(json.items)
        console.log(json2.items)
        // props.setFetchedRelatedArtists(json2.items)
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
