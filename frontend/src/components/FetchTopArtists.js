import {useEffect, useState} from "react";

const FetchTopArtists = () => {

    const [topArts, setTopArts] = useState('')
    const [authenticated, setAuthenticated] = useState(false)

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
        setAuthenticated(true)
    }


    return (
        <>
            {topArts !== undefined ? topArts.items?.map(item => {
                return <li>{item.name}</li>
            }) : <p>fuck</p>}
        </>
    )

    // if (topArts !== undefined || topArts !== []){
    //     return (
    //         topArts?.items?.map((test) => {
    //             <li>{test}</li>
    //         })
    //     )
    // } else {
    //     return (<p>nada</p>)
    // }


}


export default FetchTopArtists
