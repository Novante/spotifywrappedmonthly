import {useEffect, useState} from "react";
import FetchTopArtists from "../components/FetchTopArtists";

const Homepage = () => {

    // const [topArtists, setTopArtists] = useState('0')

    useEffect(() => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const token = urlParams.get('token')
        localStorage.setItem('token', token)
        // setTopArtists(fetchTopArtists)
    }, [])

    // const fetchTopArtists = async () => {
    //     const topArtists = await fetch('https://api.spotify.com/v1/me/top/artists', {
    //         method: 'get',
    //         headers: new Headers({
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         })
    //     })
    //     setTopArtists(await topArtists.json())
    // }

    // console.log(topArtists)


    return (
        <>
            <div>
                {<a href="http://localhost:3001/login" className="loginButton">
                    <p>Authorize via Spotify</p>
                </a>}
                {/*<button onClick={fetchTopArtists}></button>*/}
            </div>
            <div>
                <FetchTopArtists></FetchTopArtists>
            </div>
        </>

    )

}




export default Homepage
