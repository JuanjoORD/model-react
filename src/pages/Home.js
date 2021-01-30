import React from 'react'

import DataUserContainer from '../components/DataUserContainer'
import TweetsList from '../components/Tweets'
import Trends from "../components/Trends"

class Home extends React.Component{
    render(){
       const dataJson = require("../server/db.json")

        return(
            <div className="container" >
                <div className="row" >
                    <div className="col l4" >
                        <div className="row">
                            <DataUserContainer/>
                        </div>
                        <div className="row" >
                            <Trends/>
                        </div>
                    </div>
                
                    <div className="col l8" >
                        <TweetsList tweets={dataJson.tweets} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home