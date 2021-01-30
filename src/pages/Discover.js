import React from 'react'

import discover from "../images/discover.svg"

import Trends from "../components/Trends"

class Discover extends React.Component{
    render(){
        return(
            <div className="row" >
                <div className="col l8 left" >
                    <img src={discover} alt="Discover" />
                </div>

                <div className="col l4 right" >
                    <Trends/>
                </div>
            </div>
        )
    }
}

export default Discover