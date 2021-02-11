import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect} from "react-router-dom";
import React from 'react'
import Login from "./containers/login";
import Admin from "./containers/Admin";
import Register from "./containers/Register";


export default function IRouter() {
    return <Router>
        
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/register" component={Register} />
            <Redirect to='/admin' />
        </Switch>

    </Router>
}