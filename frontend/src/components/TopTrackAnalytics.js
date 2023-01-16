import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faCoffee, faHeartbeat} from '@fortawesome/fontawesome-free-solid'

const TopTrackAnalytics = (props) => {

    const [averageBpm, setAverageBpm] = useState(0)


    const ref = useRef(0)

    useEffect(() => {
        if (ref.current.getBoundingClientRect().top > 0){
            console.log(ref.current.getBoundingClientRect().top + 'bä')
        }
    },[ref])

    useEffect(() => {
        if (props.fetchedTopTracks !== null){
            let tempo = 0
            for (let i = 0; i < props.fetchedTopTracks.items.length; i++) {
                tempo += props.fetchedTopTracks.items[i].characteristics.tempo
            }
            setAverageBpm(Math.round(tempo / props.fetchedTopTracks.items.length))
        }

    },[props.fetchedTopTracks])

    return (
        <div ref={ref} className="topTrackAnalyticsWrapper">
            <div className="topTrackAnalyticsCardContainer">

                <div style={{display: "flex", flexDirection: "column", width: '100%', position: "relative"}}>
                    <div className="topTrackAnalyticsTitle">Track Analytics</div>

                    <div id="test" className="analyticCircleContainer">
                        <div style={{width: '20%'}}>
                            <CircularProgressbarWithChildren
                            styles={buildStyles({
                                pathTransitionDuration: 1
                            })} value={averageBpm}>
                            <FontAwesomeIcon style={{marginTop: -10}} size='3x' icon={faHeartbeat}  />
                                <div style={{fontSize: 20, marginTop: 5}}>
                                    <strong>{averageBpm}</strong> BPM
                                </div>
                        </CircularProgressbarWithChildren>
                        </div>
                        <div style={{width: '20%'}}>
                            <CircularProgressbar
                            styles={buildStyles({
                                pathTransitionDuration: 1
                            })} value={30} text="BPM">
                            </CircularProgressbar>
                        </div>
                        <div style={{width: '20%'}}>
                            <CircularProgressbar
                            styles={buildStyles({
                                pathTransitionDuration: 1
                            })} value={30} text="BPM">
                            </CircularProgressbar>
                        </div>
                    </div>


                </div>
                <div className="topTracksTitlesContainer">

                    {props.fetchedTopTracks.items.map((test, index) => {
                        // let size = Math.floor(Math.random() * (30-10) + 10)
                        let trackText = test.name.replace(/\s/g, '');
                        let fontWeight = 500
                        let color = '#3a3a3a'

                        if (index % 2) {
                            fontWeight = 700
                            color = 'black'
                        }

                        let track = React.createElement('li', {
                            style: {
                                fontSize: '26px',
                                lineHeight: 26 + 'px',
                                fontWeight: fontWeight,
                                color: color
                            },
                            className: 'trackText'
                        }, trackText)


                        return track
                    })}
                </div>


            </div>
        </div>
    )
}

export default TopTrackAnalytics
