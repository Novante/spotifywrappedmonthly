import {useEffect, useState} from "react";

const DataCard = (props) => {

    const [artist, setArtist] = useState(props.artist)

    useEffect(() => {
        setArtist(props.artist)
    }, [props.artist])

    console.log(artist)


    return (
        <div className="dataCardOuterWrapper">
            <div className="dataCardWrapper">
                {artist && (
                    <div className="imageChild">
                        <img className="artistImage" src={props?.artist?.images[0]?.url}></img>
                    </div>
                )

                }
                <div className="child"></div>

                <div className="child">
                    <div className="artistInfo">
                        <div className="artistNameDesc">
                            Favorite artist
                            <div className="artistName">
                                {artist.name}
                            </div>

                            <div className="artistNameDesc textMargin">
                                Spotify Popularity
                            </div>
                            <div className="artistName">
                                {artist.popularity} / 100
                            </div>
                        </div>
                    </div>
                </div>

                <div className="child"></div>
            </div>
        </div>
    )
}

export default DataCard
