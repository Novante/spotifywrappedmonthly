import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollingArtists = (props) => {

    const testRef = useRef()
    const [filteredLength, setFilteredLength] = useState(props.filtered.length)
    const [addedImageArray, setAddedImageArray] = useState()
    const [filteredArray, setFilteredArray] = useState(props.filtered)
    const [div, setDiv] = useState(0)

    const [added, setAdded] = useState([])


    useLayoutEffect(() => {
        let tempArr = []

        console.log(props.filtered)
        console.log(props.pxArtistImages.length)
        if (testRef.current.offsetHeight !== 0) {
            console.log(testRef.current.offsetHeight)
          (testRef.current.offsetHeight)
        }

        console.log(props.filtered)
        setFilteredArray(props.filtered)

        if (props.filtered !== null) {
            for (let i = 0; i < props.filtered.length; i++) {
                let img = new Image()
                img.addEventListener('load', () => {
                    if (img.height !== 320 || img.width !== 320){
                    } else {
                        console.log(img)
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
                console.log(added[i])
                img.src = added[i]
                div.appendChild(img);
            }

            let remainder = added.length % 3
            if (remainder !== 0){
                let missing = 3 - remainder
                for (let i = 0; i < missing; i++) {
                    let img = document.createElement('img')
                    img.src = added[Math.floor(Math.random() * added.length)]
                    div.appendChild(img)
                }
            }

            document.documentElement.style.setProperty('--scrollingArtistContainerEndHeight', '-' + (div.offsetHeight + 1095) + 'px')
            document.documentElement.style.setProperty('--scrollingArtistContainerAnimationDelay', '5s')

    }, [props.filtered])

    useLayoutEffect(() => {
        setDiv(document.getElementById('scrollingPastArtistImageContainer'))

    },[])

    const ref = useRef()
    return (
        <div className="scrollingPastArtistImageContainerWrapper">
            <div ref={testRef} id="scrollingPastArtistImageContainer" className="scrollingPastArtistImageContainer">


            </div>
        </div>
    )
}

export default ScrollingArtists
