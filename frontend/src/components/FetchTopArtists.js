import {useEffect, useState} from "react";

const FetchTopArtists = (props) => {

    let artists
    let token = localStorage.getItem('token')

    useEffect(() => {
        if (token !== null){
            fetchArtists()
        }
    },[token])

    const fetchArtists = async () => {
        await fetch('https://api.spotify.com/v1/me/top/artists', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        })
            .then(res => res.json())
            .then(res => artists = res)
        setArtist()
    }

    const setArtist = () => {
        props.setArtist(artists)
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
