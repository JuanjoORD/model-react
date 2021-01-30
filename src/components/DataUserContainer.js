import React from 'react'

import "../styles/Cardcontainer.css"

import Searcher from './Searcher'

class DataUserContainer extends React.Component{    
    render(){                
        const searchCard = {
            background: '#fff',
            border: '2px solid blue',        
            borderRadius: '8px',
        }

        const dataJson = require("../server/db.json")

        return(
            <div className="card-container" >
                <div className="upper-container" >
                    <div className="image-container" >
                        <img src={dataJson.currentUser.avatar} alt="User avatar" />
                    </div>
                </div>

                <div className="lower-container" >
                    <div className="username" >
                        <h3>{dataJson.currentUser.username}</h3>
                        <h4>@{dataJson.currentUser.nickname}</h4>
                    </div>
                    <div>
                        <div className="tweets" >
                            <h3>TWEETS</h3>
                            <h4>{dataJson.currentUser.tweets}</h4>
                        </div>
                        <div className="following" >
                            <h3>FOLLOWING</h3>
                            <h4>{dataJson.currentUser.following}</h4>
                        </div>
                        <div className="followers" >
                            <h3>FOLLOWERS</h3>
                            <h4>{dataJson.currentUser.followers}</h4>
                        </div>
                    </div>
                    <div className="search" >
                        <Searcher searchStyle={searchCard} myplaceholder="Compose new Tweet..." />
                    </div>
                </div>
            </div>          
        )
    }
}

export default DataUserContainer