import {useEffect, useState} from "react";

const FetchTopSongs = (props) => {

    let songs

    useEffect(() => {
        fetchSongs()
    }, [])

    const fetchSongs = async () => {
        await fetch('https://api.spotify.com/v1/me/top/tracks', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem('token')}`
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
