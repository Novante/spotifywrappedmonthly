import {useEffect, useState} from "react";
import FetchTopArtists from "../components/FetchTopArtists";
import DataCard from "../components/DataCard";

const Homepage = () => {

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const token = urlParams.get('token')
        localStorage.setItem('token', token)

    }, [])


    return (
        <>
            <nav>

            </nav>
            {/*<div>*/}
            {/*    <DataCard></DataCard>*/}
            {/*</div>*/}


            <div className="nameWrapper">
                <div className="nameHeader" id="nameHeader">
                    Welcome.
                </div>
            </div>

            <div className="loginMessageWrapper">
                <div className="loginMessage">
                    Please begin by authorizing with your Spotify account.
                </div>
            </div>

            <div className="spotifyLoginButton">
                {<a href="http://localhost:3001/login" className="loginButton">
                    <p>Authorize via Spotify</p>
                </a>}
            </div>


            <div>
                <FetchTopArtists></FetchTopArtists>
            </div>
        </>

    )

}


export default Homepage
