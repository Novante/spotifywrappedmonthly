import {useEffect, useLayoutEffect, useRef, useState} from "react";
import RelatedImageBox from "./RelatedImageBox";

const FetchRelatedArtists = (props) => {

    let token = localStorage.getItem('token')
    const [relatedArtistImages, setRelatedArtistImages] = useState([])
    const [artists, setArtists] = useState([])
    const [added, setAdded] = useState([])

    const ref = useRef()

    useEffect(() => {
        let counter = 0
        let div = document.getElementById('relatedArtistImageContainer')
        console.log(props.fetchedRelatedArtists)
        let tempArr = []
        for (let i = 0; i < props.fetchedRelatedArtists.length; i++) {
            let img = new Image()
            img.addEventListener('load', () => {
                if (img.height !== 160 || img.width !== 160){
                    counter++
                } else {
                    console.log(img)
                    tempArr.push({img: img.src, index: counter})
                    counter++
                }
            })
            img.src = props.fetchedRelatedArtists[i].images[2].url
        }
        setAdded(tempArr)

        for (let i = 0; i < added.length; i++) {
            let div2 = document.createElement('relatedImageBox')
            console.log(added)
            let img = document.createElement('img')
            let p = document.createElement('p')
            img.src = added[i].img
            p.innerText = props.fetchedRelatedArtists[added[i].index].name
            p.className = 'relatedImageBoxArtistName'
            div2.appendChild(img);
            div2.appendChild(p)
            div2.className = 'relatedImageBox'
            div.appendChild(div2)
        }



        console.log(tempArr)


    },[props.artists])



    return (
        <div className="relatedArtistImageContainerWrapper">
            <div ref={ref} id="relatedArtistImageContainer" className="relatedArtistImageContainer">

            </div>
        </div>)

}
export default FetchRelatedArtists
