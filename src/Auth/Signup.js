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
import Axios from 'axios';
import './Signup.css';

export default class Singup extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            confirmPasssword: '',
            name: '',
            email: '',
            dob: ''
        }
    }

    handleResetEvent = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSignupEvent = () => {
        console.log(this.state);
        Axios.post('/users', this.state).then(function (response) {

        }).catch(function (error) {

        });
    }

    render() {
        return (
            <Row className="h-100 justify-content-center align-items-center margin-top-30">
                <Col lg="5">
                    <Card className="mx-auto">
                        <CardHeader>
                            Signup
                        </CardHeader>
                        <CardBody>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                                <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleResetEvent} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                                <Input placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleResetEvent} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Confirm</InputGroupAddon>
                                <Input placeholder="password" type="password" name="confirm_password" value={this.state.confirmPassword} onChange={this.handleResetEvent} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                                <Input placeholder="name" name="name" value={this.state.name} onChange={this.handleResetEvent} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
                                <Input placeholder="email" name="email" value={this.state.email} onChange={this.handleResetEvent} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">DOB</InputGroupAddon>
                                <Input placeholder="Date Of Birth" name="dob" value={this.state.dob} onChange={this.handleResetEvent} />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Button onClick={this.handleSignupEvent}>SignUp</Button>
                            </InputGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}