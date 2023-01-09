import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollingArtists = (props) => {

    const testRef = useRef()
    const [filteredArray, setFilteredArray] = useState(props.filtered)
    const [offsetHeight, setOffsetHeight] = useState(0)

    const [added, setAdded] = useState([])
    const [test, setTest] = useState(0)


    useEffect(() => {
        let tempArr = []
        let scrollingArtistDiv = document.getElementById('scrollingPastArtistImageContainer');

        // console.log(props.filtered)
        // console.log(props.pxArtistImages.length)
        if (testRef.current.offsetHeight !== 0) {

        }


        // console.log(props.filtered)
        setFilteredArray(props.filtered)

        if (props.filtered !== null) {
            for (let i = 0; i < props.filtered.length; i++) {
                let img = new Image()
                img.addEventListener('load', () => {
                    if (img.height !== 320 || img.width !== 320){
                    } else {
                        // console.log(img)
                        tempArr.push(img.src)
                    }
                })
                img.src = props.filtered[i].images[1].url
            }
            setAdded(tempArr)

            console.log(tempArr.length)
            // setAdded(tempArr)
        }



            for (let i = 0; i < added.length; i++) {
                console.log(added.length)
                let img = document.createElement('img')
                // console.log(added[i])
                img.src = added[i]
                scrollingArtistDiv.appendChild(img);
            }

            let remainder = added.length % 3

            if (remainder !== 0){
                console.log('remainder', remainder)
                let missing = 3 - remainder
                for (let i = 0; i < missing; i++) {
                    let img = document.createElement('img')
                    img.src = added[Math.floor(Math.random() * added.length)]
                    scrollingArtistDiv.appendChild(img)
                }
            }

            const lines = scrollingArtistDiv.childElementCount / 3
        const pixels = lines * 320


                setOffsetHeight(pixels)

        // inconsistencies with .offsetHeight, hence using calculations based off childElementCount. fine since all spotify images are 320 px.



            console.log('childcount', scrollingArtistDiv.childElementCount)
    }, [props.filtered])

    useEffect(() => {
        if (offsetHeight !== 0) {
            document.documentElement.style.setProperty('--scrollingArtistContainerEndHeight', '-' + (offsetHeight + 1095) + 'px')
            document.documentElement.style.setProperty('--scrollingArtistContainerAnimationDelay', '5s')
        }
    }, [offsetHeight])

    return (
        <div className="scrollingPastArtistImageContainerWrapper">
            <div ref={testRef} id="scrollingPastArtistImageContainer" className="scrollingPastArtistImageContainer"/>
        </div>
    )
}

export default ScrollingArtists
