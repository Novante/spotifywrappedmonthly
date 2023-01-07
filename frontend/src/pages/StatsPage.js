import {AuthorizeSpotify, LoginMessage, WelcomeMessage} from "../components/HomepageMessages";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import ScrollingArtists from '../components/ScrollingArtists'
import ScrollPage from "./ScrollPage";
import FetchCurrentTrack from "../components/FetchCurrentTrack";
import FetchRelatedArtists from "../components/FetchRelatedArtists";
import DataCard from "../components/DataCard";


const StatsPage = (props) => {

    const [pxArtistImages, setpxArtistImages] = useState([])

    // useEffect(() => {
    //     console.log('toptracks', props.fetchedTopTracks)
    // }, [props.fetchedTopTracks])

    return (
        <div className="statsPageWrapper">
        <div id="page" className="statsPageContainer">
            <WelcomeMessage token={props.token}></WelcomeMessage>
            <LoginMessage></LoginMessage>

            <ScrollingArtists filtered={props.fetchedArtist}
                              pxArtistImages={pxArtistImages}></ScrollingArtists>

        </div>

            <ScrollPage fetchedTopTracks={props.fetchedTopTracks} fetchedRelatedArtists={props.fetchedRelatedArtists} topArtist={props.fetchedArtist[0]} allArtists={props.fetchedArtist}></ScrollPage>
        </div>


    )
}
export default StatsPage
