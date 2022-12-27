import scrollPage from '../scrollPage.css'
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import FetchRelatedArtists from "../components/FetchRelatedArtists";

const ScrollPage = (props) => {

    const [relatedImageBoxHeight, setRelatedImageContainerHeight] = useState(0)
    const [songs, setSongs] = useState(props.songs)
    let counter = 1

    const scrollPageScroller = useRef()
    const [imageSource, setImageSource] = useState('https://www.norrland247.se/wp-content/uploads/2020/03/soluppgangen-med-renar-i-lulea-skargard-01-1080x1350.jpg')
    let lastScrollPos = 0
    let hangScroll = 0
    let topArtistAndNameOpacity = 0
    let descriptionTextOpacity = 0
    let similarArtistTextOpacity = 0
    let similarArtistImageContainerOpacity = 0


    useEffect(() => {
        console.log(relatedImageBoxHeight, 'FAJWIFJWAIFJWAF')
    }, [relatedImageBoxHeight])

    useEffect(() => {
        if (props.allArtists !== 0){
            console.log(props.allArtists)
        }
    }, [props.allArtists])

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


        if (window.scrollY > 900 && hangScroll < 20){
            lastScrollPos = 900
            if (hangScroll < 1){
                topArtistAndNameOpacity += 0.01
                document.getElementById('artistName').style.setProperty("opacity", topArtistAndNameOpacity)
            } else if (hangScroll > 1 && hangScroll < 2){
                descriptionTextOpacity += 0.01
                document.getElementById('topArtistMonthText').style.setProperty('opacity', descriptionTextOpacity)
            } else if (hangScroll > 2 && hangScroll < 2.5){
                similarArtistTextOpacity += 0.02
                document.getElementById('similarArtistsText').style.setProperty('opacity', similarArtistTextOpacity)
            } else if (hangScroll > 2.5 && hangScroll < 3.5){
                similarArtistImageContainerOpacity += 0.02
                document.getElementById('relatedArtistImageContainer').style.setProperty('opacity', similarArtistImageContainerOpacity)
            } else {
                hangScroll = 20

            }

            window.scrollTo(0, 900)

            hangScroll += 0.01


        }



    }

    return (
        <>
        <div ref={scrollPageScroller}>
            <div className="wrapper">

                <div className="topArtistBanner">
                    <div className="artistImage"><img src={props?.allArtists[0]?.images[1]?.url}></img>
                    </div>
                    <div>
                    <div id="artistName" className="scrollPageArtistName">
                        <div style={{marginBottom: '5px', fontSize: '50px'}}>Top Artist:</div>
                        <div className="topArtistScroll">{props?.allArtists[0]?.name}</div>
                    </div>
                        <div style={{width: '70%', flexDirection: 'column', marginTop: '50px'}}>
                        <p id="topArtistMonthText" className="topArtistText">Your top artist of the month is {props?.allArtists[0]?.name}!</p>
                        <p id="similarArtistsText" className="topArtistText" style={{marginTop: '70px'}}>While we know that you can't get enough of them, here are a few similar artists that deserve some love too:</p>
                        </div>
                    </div>
                </div>
            </div>

            <FetchRelatedArtists setRelatedImageContainerHeight={setRelatedImageContainerHeight} topArtist={props.allArtists[0]}></FetchRelatedArtists>



        </div>

        </>
    )
}

export default ScrollPage
