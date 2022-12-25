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


const nav = useNavigate()

    useEffect(() => {
        if (window.location.href.includes('token')){
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const token = urlParams.get('token')
            console.log(window.location.href)
            console.log(token)
            localStorage.setItem('token', token)
            props.setToken(token)
            nav('/stats')
        }

    }, [window.location.href])




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
