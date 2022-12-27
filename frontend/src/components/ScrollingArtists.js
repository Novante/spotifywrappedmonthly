import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollingArtists = (props) => {

    const testRef = useRef()
    const [filteredLength, setFilteredLength] = useState(props.filtered.length)
    const [addedImageArray, setAddedImageArray] = useState([])
    const [filteredArray, setFilteredArray] = useState(props.filtered)

    useEffect(() => {
        console.log(props.filtered)
        console.log(props.pxArtistImages.length)
        if (testRef.current.offsetHeight !== 0) {
            props.setContainerHeight(testRef.current.offsetHeight)
            document.documentElement.style.setProperty('--scrollingArtistContainerEndHeight', '-' + (testRef.current.offsetHeight + 1095) + 'px')
            // document.documentElement.style.setProperty('--scrollingArtistContainerAnimationDelay', '5s')

        }
        console.log(props.filtered)
        setFilteredArray(props.filtered)
    }, [props.filtered])

    useEffect(() => {
        setTimeout(() => {
            addMissingImages()
        }, 2000)
    }, [])


    const checkImg320 = (e) => { // fortsätt härifrån, ta alla artister och dra bort en för varje som blir removed här. Fixa % - funktion
        if (e.target.height !== 320 || e.target.width !== 320) {
            setFilteredLength(filteredLength => filteredLength - 1)
            e.target.remove()
        }
    }

    const addMissingImages = () => {
        let remainder = filteredArray.length % 3
        let missing = 3 - remainder

        if (remainder !== 0){
            for (let i = 0; i < missing; i++) {
                let randomNumber = Math.floor(Math.random() * filteredArray.length)
                setAddedImageArray(() => [...addedImageArray, filteredArray[randomNumber]])

            }
        }

    }


    const ref = useRef()
    return (
        <div className="scrollingPastArtistImageContainerWrapper">
            <div ref={testRef} id="scrollingPastArtistImageContainer" className="scrollingPastArtistImageContainer">
                {filteredArray.map((test, index) => {
                    return <img id={index} onLoad={checkImg320} src={test.images[1].url}></img>
                })}

                {addedImageArray &&
                    addedImageArray.map((test) => {
                    return <img src={test.images[1].url}></img>
                })}



            </div>
        </div>
    )
}

export default ScrollingArtists
