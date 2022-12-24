import {useEffect, useState} from "react";
import FetchTopArtists from "../components/FetchTopArtists";
import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import DataCard from "../components/DataCard";
import FetchTopSongs from "../components/FetchTopSongs";

const Homepage = () => {

    const [authorized, setAuthorized] = useState(localStorage.getItem('authed'))
    const [artist, setArtist] = useState('')
    const [songs, setSongs] = useState('')


    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const token = urlParams.get('token')
        if (typeof localStorage.getItem('token') != null) {
            localStorage.setItem('token', token)
        }
    }, [authorized])


    return (
        <>
            {localStorage.getItem('authed') !== 'true' && (
                <>
                    <WelcomeMessage></WelcomeMessage>
                    <LoginMessage></LoginMessage>
                    <AuthorizeSpotify></AuthorizeSpotify>
                </>
            )
            }

            {localStorage.getItem('authed') && (
                <>
                    <DataCard artist={artist} songs={songs}></DataCard>
                    <FetchTopArtists setArtist={setArtist}></FetchTopArtists>
                    <FetchTopSongs setSongs={setSongs}></FetchTopSongs>
                </>

            )

            }


        </>

    )

}


export default Homepage
