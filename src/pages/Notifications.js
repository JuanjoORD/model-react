import React from 'react'

import TweetsList from "../components/Tweets"

import notifications from "../images/notifications.svg"

class Notifications extends React.Component{
    render(){
        const dataJson = require("../server/db.json")

        return(
            <div className="row" >
                <div className="row center" >
                    <img src={notifications} alt="Notifications" style={{height: 400, width: 600}} />
                </div>
                <div className="col l6 offset-l3" >
                    <TweetsList tweets={dataJson.tweets} />
                </div>
            </div>
        )
    }
}

export default Notifications