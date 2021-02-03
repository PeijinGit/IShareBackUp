import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import Home from "./pages/home";
import Login from "./pages/login/index";


export default function IRouter() {
    return <Router>

        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>

    </Router>
}