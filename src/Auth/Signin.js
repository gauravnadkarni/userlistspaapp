import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Button,
    CardHeader,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import {
    //BrowserRouter as Router,
    //Route,
    Link,
    //Redirect,
    //withRouter
} from "react-router-dom";
import './Signin.css';

export default class Singin extends Component {
    constructor() {
        super();
        let initialState = {
            username: '',
            password: ''
        };
        this.state = initialState;
    }

    handleOnChangeEvent = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnResetEvent = (event) => {
        this.setState({ username: '', password: '' });
    }

    render() {
        return (
            <Row className="h-100 justify-content-center align-items-center margin-top-100">
                <Col lg="5">
                    <Card className="mx-auto">
                        <CardHeader>
                            Signin
                        </CardHeader>
                        <CardBody>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                                <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleOnChangeEvent} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                                <Input placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleOnChangeEvent} />
                            </InputGroup>
                            <br />
                            <Row>
                                <Col lg="3">
                                    <Button color="secondary">SignIn</Button>
                                </Col>
                                <Col lg="3">
                                    <Button color="secondary" onClick={this.handleOnResetEvent}>Reset</Button>
                                </Col>
                                <Col lg="6" className="float-right">
                                    <Link to="/forgot_password">Forgot Password</Link>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}