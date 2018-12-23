import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';
import {
    Route,
    Switch,
    //Redirect,
    //withRouter
} from "react-router-dom";
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import Error404 from '../errors/Error404';

export default class Body extends Component {
    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path="/" component={Signin}></Route>
                    <Route path="/signin" component={Signin}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route component={Error404}></Route>
                </Switch>
            </Container>
        );
    }
}