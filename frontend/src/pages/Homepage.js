import {useEffect, useState} from "react";
import FetchTopArtists from "../components/FetchTopArtists";
import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import DataCard from "../components/DataCard";
import FetchTopSongs from "../components/FetchTopSongs";
import {useNavigate} from "react-router-dom";

const Homepage = () => {

    const [authorized, setAuthorized] = useState('')
    const [artist, setArtist] = useState('')
    const [songs, setSongs] = useState('')
    const [token, setToken] = useState('')



    useEffect(() => {
        if (window.location.href !== 'http://localhost:3000/'){
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const token = urlParams.get('token')
            console.log(window.location.href)
            localStorage.setItem('token', token)
            setToken(token)
        }

    }, [])


    return (
        <>
            {localStorage.getItem('authed') !== 'true' && (
                <>
                    <WelcomeMessage></WelcomeMessage>
                    <LoginMessage></LoginMessage>
                    <AuthorizeSpotify setAuthorized={setAuthorized}></AuthorizeSpotify>
                </>
            )
            }

            {localStorage.getItem('authed') && (
                <>
                    <FetchTopArtists token={token} setArtist={setArtist}></FetchTopArtists>
                    <FetchTopSongs token={token} setSongs={setSongs}></FetchTopSongs>
                    <DataCard artist={artist} songs={songs}></DataCard>
                </>
            )}
        </>

    )

}


export default Homepage
