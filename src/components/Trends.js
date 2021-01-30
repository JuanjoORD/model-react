import React from 'react'

import "../styles/Trends.css"

class Trends extends React.Component{    
    render(){
        const dataJson = require("../server/db.json")                

        return(
            <div className="trends-container" >
                <div className="trends-upper-container" >
                    <h4>Trends</h4> <h6>{' . '}Change</h6>
                </div>

                <div className="trends-lower-container" >
                    <ul className="list-unstyled" >
                        {dataJson.trends.map(trend => {
                            return <li>{trend.trend}</li>                        
                        })}
                    </ul>
                </div>
            </div>          
        )
    }
}

export default Trends