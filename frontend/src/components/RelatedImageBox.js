import {useLayoutEffect} from "react";

const RelatedImageBox = (props) => {

    useLayoutEffect(() => {
        const col = document.getElementsByClassName('testImage')

        for (let i = col.length-1; i >= 0; i--) {
            if (col[i].height !== 160){
                col[i].parentNode.remove()
            }
        }



    })

    return(
        <div id="relatedImageBox" className="relatedImageBox">
            <img className="testImage" src={props.image}></img>
            <p className="relatedImageBoxArtistName">{props.artists.name}</p>

        </div>
    )

}
export default RelatedImageBox
