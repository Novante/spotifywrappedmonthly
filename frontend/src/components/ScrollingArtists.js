import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollingArtists = (props) => {

    const testRef = useRef()

    useEffect(() => {
        console.log(props.pxArtistImages.length)
        if (testRef.current.offsetHeight !== 0){
            props.setContainerHeight(testRef.current.offsetHeight)
            document.documentElement.style.setProperty('--scrollingArtistContainerEndHeight', '-'+ (testRef.current.offsetHeight + 1095) + 'px')
            document.documentElement.style.setProperty('--scrollingArtistContainerAnimationDelay', '5s')

        }
        console.log(props.filtered)
    }, [props.filtered])

    const ref = useRef()
    return (
        <div className="scrollingPastArtistImageContainerWrapper">
            <div ref={testRef} id="scrollingPastArtistImageContainer" className="scrollingPastArtistImageContainer">
                {props.filtered.map((test) => {
                return <img src={test}></img>
            })}
            </div>
        </div>
    )
}

export default ScrollingArtists
