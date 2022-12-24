import {useEffect, useState} from "react";
import FetchTopArtists from "../components/FetchTopArtists";
import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import DataCard from "../components/DataCard";
import FetchTopSongs from "../components/FetchTopSongs";
import {useNavigate} from "react-router-dom";

const Homepage = (props) => {

    const [authorized, setAuthorized] = useState('')

    const [token, setToken] = useState('')

const nav = useNavigate()

    useEffect(() => {
        if (window.location.href.includes('token')){
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const token = urlParams.get('token')
            console.log(window.location.href)
            console.log(token)
            localStorage.setItem('token', token)
            setToken(token)
            nav('/stats')
        }

    }, [window.location.href])


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

            {/*{localStorage.getItem('authed') && (*/}
            {/*    <>*/}
            {/*        <FetchTopArtists token={token} setArtist={props.setArtist}></FetchTopArtists>*/}
            {/*        <FetchTopSongs token={token} setSongs={props.setSongs}></FetchTopSongs>*/}
            {/*        <DataCard artist={props.artist} songs={props.songs}></DataCard>*/}
            {/*    </>*/}
            {/*)}*/}
        </>

    )

}


export default Homepage
