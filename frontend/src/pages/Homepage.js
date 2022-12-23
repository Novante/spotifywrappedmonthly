import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

const Homepage = () => {

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const token = urlParams.get('token')
        localStorage.setItem('token', token)
    }, [])



    return (
        <div>
            {<a href="http://localhost:3001/login" className="loginButton">
                <p>Authorize via Spotify</p>
            </a>}
        </div>
    )

}



export default Homepage
