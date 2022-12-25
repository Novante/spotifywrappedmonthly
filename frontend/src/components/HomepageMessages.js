import {useEffect, useRef} from "react";
import FetchTopArtists from "./FetchTopArtists";
import FetchTopSongs from "./FetchTopSongs";

export const WelcomeMessage = (props) => {

    useEffect(() => {
        if (window.location.href !== 'http://localhost:3000/') {
            if (
                document.getElementById("nameHeader")
            ) {
                document.getElementById("nameHeader").classList.remove('nameHeaderAnimation');

            }
        }
    }, [window.location.href])



    return (
        <div className="nameWrapper">
            <div id="nameHeader" className="nameHeader nameHeaderAnimation">
                Welcome.
            </div>
        </div>)
}

export const LoginMessage = () => {

    let scrollSpeed

    useEffect(() => {
        if (window.location.href !== 'http://localhost:3000/') {
            if (
                document.getElementById("loginMessage")
            ) {
                const el = document.getElementById("loginMessage")
                el.classList.add('loginMessageRemoveAnimation')

                const timer = setTimeout(() => {
                    el.innerText = 'Authorized, enjoy the ride.'
                    el.classList.add('authorizedAnimation')

                }, 2500);
                return () => clearTimeout(timer);
            }
        }
    }, [window.location.href])


    return (
        <div className="loginMessageWrapper">
            <div id="loginMessage" className="loginMessage loginMessageAnimation ">
                Please begin by authorizing with your Spotify account.
            </div>
        </div>
    )
}

export const AuthorizeSpotify = (props) => {
    return (
        <div className="spotifyLoginButton">
            {<a href="http://localhost:3001/login" className="loginButton" onClick={() => { localStorage.setItem('authed', 'true'); props.setAuthorized('true')}
            }>
                <p>Authorize via Spotify</p>
            </a>}

        </div>

    )
}

