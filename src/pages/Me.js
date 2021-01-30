import React from 'react'

import me from "../images/me.svg"

import DataUserContainer from "../components/DataUserContainer"

class Me extends React.Component{
    render(){
        return(
            <div className="row" >
                <div className="col l4 offset-l1" >
                    <img src={me} alt="My user" style={{height: 500, width: 500}} />
                </div>

                <div className="col l4 offset-l2" >
                    <DataUserContainer/>
                </div>
            </div>
        )
    }
}

export default Me