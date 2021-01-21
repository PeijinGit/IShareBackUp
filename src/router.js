// import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import React from 'react'
import Home from "./pages/home";
import Login from "./pages/login/login";


export default function IRouter(){
    return  <Router>
            
        <Switch>
            <Route exact path = "/" component={Login}/>
            <Route exact path = "/home" component={Home}/>
            {/* <Route path = "/home" component={Home}/> */}
            {/* <Route path = "*" component={Home}/> */}
        </Switch>

    </Router>
}