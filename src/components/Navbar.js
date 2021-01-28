import React from 'react'

import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <div class="nav-wrapper">
                    <Link to="/" class="brand-logo center">TwitterLogo</Link>
                    <ul class="left hide-on-med-and-down">
                        <li class="active"><Link to="/">Home</Link></li>
                        <li><Link to="/notifications">Notifications</Link></li>
                        <li><Link to="/discover">Discover</Link></li>
                        <li><Link to="/me">Me</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar