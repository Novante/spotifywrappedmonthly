import React from 'react'
const TopTrackAnalytics = (props) => {


    return (
        <div className="topTrackAnalyticsWrapper">
            <div className="topTrackAnalyticsCardContainer">


                <div className="topTrackAnalyticsTitle">Track Analytics</div>
                <div className="topTracksTitlesContainer">

                    {props.fetchedTopTracks.items.map((test, index) => {
                        // let size = Math.floor(Math.random() * (30-10) + 10)
                        let trackText = test.name.replace(/\s/g, '');
                        let fontWeight = 500
                        let color = '#3a3a3a'

                        if (index % 2){
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



            {/*<div className="analyticCircleContainer">*/}

            {/*    <div className="circleTest">*/}
            {/*        <div className="circleTest2">BPM: 200</div>*/}
            {/*    </div>*/}

            {/*    <div className="circleTest">*/}
            {/*        <div className="circleTest2"></div>*/}
            {/*    </div>*/}





            {/*</div>*/}
            </div>
        </div>
    )
}

export default TopTrackAnalytics
