import {useEffect, useLayoutEffect, useRef, useState} from "react";
import RelatedImageBox from "./RelatedImageBox";

const FetchRelatedArtists = (props) => {

    let token = localStorage.getItem('token')
    const [relatedArtistImages, setRelatedArtistImages] = useState([])
    const [artists, setArtists] = useState([])
    const ref = useRef()

    useEffect(() => {
        console.log(props.topArtist?.id)
        if (props.topArtist !== null || props.topArtist?.id !== undefined) {
            fetchRelated(props.topArtist?.id)
        }

        props.setRelatedImageContainerHeight(ref.current.offsetHeight)
    }, [props.topArtist])




    console.log(relatedArtistImages)

    const fetchRelated = async (id) => {
        let tempArr = []
        const res = await fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        })
        const json = await res.json()
        console.log(json.artists)

        for (let i = 0; i < json.artists.length; i++) {
            if (json.artists[i].images[2].height === 160 && json.artists[i].images[2].width === 160) {
                tempArr.push(json.artists[i])
            }
        }

        console.log(json.artists[0].name)
        setRelatedArtistImages(tempArr)
        setArtists(tempArr)

    }

    return (
        <div className="relatedArtistImageContainerWrapper">
            <div ref={ref} id="relatedArtistImageContainer" className="relatedArtistImageContainer">
                {artists &&
                    artists.map((artist) => {
                        return <RelatedImageBox artists={artist} image={artist.images[2].url}/>
                    })
                }


            </div>
        </div>)

}
export default FetchRelatedArtists
