import scrollPage from '../scrollPage.css'
import {useEffect, useLayoutEffect, useRef, useState} from "react";

const ScrollPage = (props) => {

    const [songs, setSongs] = useState(props.songs)
    let counter = 1

    const scrollPageScroller = useRef()
    const [imageSource, setImageSource] = useState('https://www.norrland247.se/wp-content/uploads/2020/03/soluppgangen-med-renar-i-lulea-skargard-01-1080x1350.jpg')
    let lastScrollPos = 0
    let hangScroll = 0
    let topArtistAndNameOpacity = 0
    let descriptionTextOpacity = 0
    let similarArtistTextOpacity = 0



    // useEffect(() => {
    //     if (props.allArtists !== 0){
    //         console.log(props.allArtists)
    //     }
    // }, [props.allArtists])

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
            if (hangScroll < 2){
                topArtistAndNameOpacity += 0.01
                document.getElementById('artistName').style.setProperty("opacity", topArtistAndNameOpacity)
            } else if (hangScroll > 2 && hangScroll < 3){
                descriptionTextOpacity += 0.02
                document.getElementById('topArtistMonthText').style.setProperty('opacity', descriptionTextOpacity)
            } else if (hangScroll > 3 && hangScroll < 4){
                similarArtistTextOpacity += 0.02
                document.getElementById('similarArtistsText').style.setProperty('opacity', similarArtistTextOpacity)
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
                        <p id="similarArtistsText" className="topArtistText" style={{marginTop: '50px'}}>While we know that you can't get enough of them, here are a few similar artists that you might have missed:</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}

export default ScrollPage
