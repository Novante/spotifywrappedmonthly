import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollingArtists = (props) => {

    const ref = useRef()
    return (
        <div ref={ref} id="scrollingPastArtistImageContainer" className="scrollingPastArtistImageContainer">
            {props.pxArtistImages.map((img, index) => {
                return <img style={{marginTop: -4}} key={index} src={img}></img>
            })}
        </div>
    )
}

export default ScrollingArtists
