import {useEffect, useState} from "react";

const FetchTopSongs = (props) => {

    let songs
    let token = localStorage.getItem('token')


    useEffect(() => {
        if(token !== null){
        fetchSongs()
        }
    }, [token])

    const fetchSongs = async () => {
        await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        })
            .then(res => res.json())
            .then(res => songs = res)
        setSongs()
    }

    const setSongs = () => {
        props.setSongs(songs)
    }

}


export default FetchTopSongs
