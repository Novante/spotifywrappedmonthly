import {useEffect, useState} from "react";

const FetchTopArtists = () => {

    const [topArts, setTopArts] = useState('')

    useEffect(() => {
        fetchArtists()
    }, [])

    const fetchArtists = async () => {
        await fetch('https://api.spotify.com/v1/me/top/artists', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            })
        })
            .then(res => res.json())
            .then(res => setTopArts(res))
    }


    // return (
    //     <>
    //         {topArts !== undefined ? topArts.items?.map(item => {
    //             return <li>{item.name}</li>
    //         }) : <p>Could not fetch artist list.</p>}
    //     </>
    // )



}


export default FetchTopArtists
