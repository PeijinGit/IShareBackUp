import {  HashRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import Home from "./containers/home";
import Login from "./containers/login/index";
import Admin from "./containers/Admin";


export default function IRouter() {
    return <Router>

        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={Admin} />
        </Switch>

    </Router>
}