import React from 'react'

import { Link } from "react-router-dom";
import Searcher from './Searcher'

import "../styles/Navbar.css"

class Navbar extends React.Component{
    render(){
        const searchNavbar ={
            background: 'gray',
            border: '2px solid gray',
            borderRadius: '20px',
            color: 'white',
            paddingLeft: '5px'
        }

        return(
            <nav className="Navbar" >
                <div className="nav-wrapper">                    
                    <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png" alt="twitter logo" className="brand-logo center" />
                    <div style={{float: 'right', marginRight: '3%'}} >
                        <Searcher myplaceholder="Search Tweets..." searchStyle={searchNavbar} />
                    </div>                    
                    <ul className="left hide-on-med-and-down">
                        <li>
                            <Link to="/">
                                <i className="material-icons left">home</i>                                
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/notifications">
                                <span class="new badge blue" data-badge-caption="*">6</span>
                                <i className="material-icons left">notifications</i>                                
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link to="/discover">
                            <i className="material-icons left">sensors</i>
                                Discover
                            </Link>
                        </li>
                        <li >
                            <Link to="/me">
                            <i className="material-icons left">how_to_reg</i>
                                Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar