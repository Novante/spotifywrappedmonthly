import {useEffect} from "react";

const FetchCurrentTrack = () => {
    let track
    let token = localStorage.getItem('token')

    useEffect(() => {
        if (token !== null) {
            // fetchCurrentTrack()
            setPlayingTrack()
        }
    }, [token])

    const fetchCurrentTrack = async () => {
        await fetch('https://api.spotify.com/v1/me/player/devices', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

    const setPlayingTrack = async () => {
        await fetch('https://api.spotify.com/v1/me/player?device_id=9e0ff036c491d664d2df5ebb6b385ba1a25366ad', {
            body: JSON.stringify({
                "device_ids": ['9e0ff036c491d664d2df5ebb6b385ba1a25366ad'],
                "uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]
            }),
            method: 'put',
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))
    }

}

export default FetchCurrentTrack
