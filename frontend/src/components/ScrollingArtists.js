import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollingArtists = (props) => {

    const testRef = useRef()
    const [filteredLength, setFilteredLength] = useState(props.filtered.length)
    const [addedImageArray, setAddedImageArray] = useState()
    const [filteredArray, setFilteredArray] = useState(props.filtered)

    const [added, setAdded] = useState([])

    let tempArr = []

    useEffect(() => {

        console.log(props.filtered)
        console.log(props.pxArtistImages.length)
        if (testRef.current.offsetHeight !== 0) {
            props.setContainerHeight(testRef.current.offsetHeight)


        }
        console.log(props.filtered)
        setFilteredArray(props.filtered)

        if (props.filtered !== null) {
            for (let i = 0; i < props.filtered.length; i++) {
                let img = new Image()
                img.addEventListener('load', () => {
                    console.log(img.height)
                    if (img.height !== 320 || img.width !== 320){
                    } else {
                        tempArr.push(img)
                    }
                })
                img.src = props.filtered[i].images[1].url
            }
            setAdded(tempArr)
        }



    }, [props.filtered])

    useEffect(() => {
        if (added !== []){
            let div = document.getElementById('scrollingPastArtistImageContainer')

            for (let i = 0; i < added.length; i++) {
                let img = document.createElement('img')
                img.src = added[i].src
                div.appendChild(img);
            }

            let remainder = added.length % 3
            if (remainder !== 0){
                let missing = 3 - remainder
                for (let i = 0; i < missing; i++) {
                    let img = document.createElement('img')
                    img.src = added[Math.floor(Math.random() * added.length)].src
                    div.appendChild(img)
                }
            }

            document.documentElement.style.setProperty('--scrollingArtistContainerEndHeight', '-' + (div.offsetHeight + 1095) + 'px')
            document.documentElement.style.setProperty('--scrollingArtistContainerAnimationDelay', '5s')
        }

    }, [added])




    const checkImg320 = (e) => { // fortsätt härifrån, ta alla artister och dra bort en för varje som blir removed här. Fixa % - funktion
        if (e.target.height !== 320 || e.target.width !== 320) {
            setFilteredLength(filteredLength => filteredLength - 1)
            e.target.remove()
        }
    }





    const ref = useRef()
    return (
        <div className="scrollingPastArtistImageContainerWrapper">
            <div ref={testRef} id="scrollingPastArtistImageContainer" className="scrollingPastArtistImageContainer">


            </div>
        </div>
    )
}

export default ScrollingArtists
