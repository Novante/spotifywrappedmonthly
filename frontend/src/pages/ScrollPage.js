import scrollPage from '../scrollPage.css'
import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollPage = (props) => {

    const [artist, setArtist] = useState(props.artist)
    const [songs, setSongs] = useState(props.songs)


    const scrollPageScroller = useRef()
    const [imageSource, setImageSource] = useState('https://www.norrland247.se/wp-content/uploads/2020/03/soluppgangen-med-renar-i-lulea-skargard-01-1080x1350.jpg')
    let lastScrollPos = 0
    let hangScroll = 0

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = (e) => {
        console.log(window.scrollY)
        console.log(hangScroll)

        if (window.scrollY > lastScrollPos){
            window.scrollBy(0, 4)
        } else if (window.scrollY < lastScrollPos){
            window.scrollBy(0, -4)
        }
        lastScrollPos = window.scrollY


        if (window.scrollY > 900 && window.scrollY < 1200 && hangScroll < 1200){
            lastScrollPos = 900
            hangScroll += 10
            window.scrollTo(0, 900)

        }



    }

    return (
        <>
        <div ref={scrollPageScroller}>
            <div className="wrapper">
                <div className="topArtistBanner">
                    <img src={'https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9'}></img>
                </div>
            </div>

        </div>

        </>
    )
}

export default ScrollPage
