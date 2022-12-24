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
        if (localStorage.getItem('token') !== null) {
            localStorage.setItem('token', token)
        }
        localStorage.setItem('authed', 'true')
    }, [authorized])


    return (
        <>
            {authorized !== 'true' && (
                <>
                    <WelcomeMessage></WelcomeMessage>
                    <LoginMessage></LoginMessage>
                    <AuthorizeSpotify></AuthorizeSpotify>
                </>
            )
            }

            {authorized === 'true' && (
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
