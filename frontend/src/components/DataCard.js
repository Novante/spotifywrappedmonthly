import {useEffect, useState} from "react";

const DataCard = (props) => {

    const [artist, setArtist] = useState(props.artist)
    const [songs, setSongs] = useState(props.songs)

    useEffect(() => {
        setArtist(props.artist)
    }, [props.artist])

    useEffect(() => {
        setSongs(props.songs)
    },[props.songs])

    console.log(props.songs)


    return (

        <div className="dataCardOuterWrapper">
            <div className="dataCardWrapper">
                {artist && (
                    <div className="imageChild">
                        <img className="artistImage" src={artist.items[0].images[1].url}></img>
                    </div>
                )

                }
                <div className="child artistChild">
                    <div className="topArtists">
                        <div className="topArtistDesc">
                            Top Artists
                        </div>
                        <div className="topArtists">
                            <div>
                                {artist && (
                                    artist?.items.slice(0,5).map((artist, index) => {
                                        return <li key={index} className="artistMargin">{artist.name}</li>
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="child">
                    <div className="artistInfo">
                        <div className="artistNameDesc">
                            Favorite artist
                            {artist && (
                                <div className="artistName">
                                    {artist?.items[0]?.name}
                                </div>
                            )}
                            <div className="artistNameDesc textMargin">
                                Spotify Popularity
                            </div>
                            {artist && (
                                <div className="artistName">
                                    {artist.items[0].popularity} / 100
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                <div className="child">
                    <div className="topArtistDesc topSongDesc">
                        Top Songs
                    </div>
                    <div className="topArtists">
                        <div>
                            {songs && (
                                songs?.items.slice(0,5).map((songs, index) => {
                                    return <li key={index} className="topSongList">{songs.name}</li>
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCard
