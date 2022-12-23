import {useEffect, useState} from "react";
import FetchTopArtists from "../components/FetchTopArtists";
import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import DataCard from "../components/DataCard";

const Homepage = () => {

    const [authorized, setAuthorized] = useState(localStorage.getItem('authed'))

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const token = urlParams.get('token')
        localStorage.setItem('token', token)
        localStorage.setItem('authed', 'true')
    }, [])


    return (
        <>
            {authorized === 'false' && (
                <>
                <WelcomeMessage></WelcomeMessage>
                <LoginMessage></LoginMessage>
                <AuthorizeSpotify></AuthorizeSpotify>
                </>
            )
            }

            {authorized === 'true' && (
                <DataCard></DataCard>
            )

            }





            <div>
                <FetchTopArtists></FetchTopArtists>
            </div>
        </>

    )

}


export default Homepage
