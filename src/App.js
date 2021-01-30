import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Notifications from "./pages/Notifications"
import Discover from "./pages/Discover"
import Me from "./pages/Me"


function App(){
    return (
        <BrowserRouter>
            <Layout >
            <Switch>
                <Route exact path="/" component={Home}/>          
                <Route exact path="/notifications" component={Notifications}/>
                <Route exact path="/discover" component={Discover}/>
                <Route exact path="/me" component={Me}/>
            </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App