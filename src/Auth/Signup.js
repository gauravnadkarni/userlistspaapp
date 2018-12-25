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
    InputGroupAddon,
    Alert
} from 'reactstrap';
import Axios from 'axios';
import './Signup.css';

export default class Singup extends Component {
    constructor() {
        super();

        this.state = {
            fields: {
                username: '',
                password: '',
                confirmPasssword: '',
                name: '',
                email: '',
                dob: ''
            },
            signupAttenpted: false,
            isOpen: false
        }
    }

    handleOnChangeEvent = (event) => {
        this.setState({ fields: { [event.target.name]: event.target.value } });
    }

    handleSignupEvent = () => {
        Axios.post('http://localhost:8000/users', this.state.formData).then(function (response) {
            if (response.status === 201)
                this.setState({ signupAttenpted: true, color: 'primary', alertMessage: 'success', isOpen: true });
            else
                this.setState({ signupAttenpted: true, color: 'danger', alertMessage: 'failure', isOpen: true });
        }).catch(function (error) {

        });
    }

    render() {
        return (
            <div>
                <Row className="h-100 justify-content-center align-items-center margin-top-30">
                    <Col lg="5">
                        <Card className="mx-auto">
                            <CardHeader>
                                Signup
                            </CardHeader>
                            <CardBody>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                                    <Input placeholder="username" name="username" value={this.state.fields.username} onChange={this.handleOnChangeEvent} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                                    <Input placeholder="password" type="password" name="password" value={this.state.fields.password} onChange={this.handleOnChangeEvent} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Confirm</InputGroupAddon>
                                    <Input placeholder="password" type="password" name="confirm_password" value={this.state.fields.confirmPassword} onChange={this.handleOnChangeEvent} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                                    <Input placeholder="name" name="name" value={this.state.fields.name} onChange={this.handleOnChangeEvent} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Email</InputGroupAddon>
                                    <Input placeholder="email" name="email" value={this.state.fields.email} onChange={this.handleOnChangeEvent} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">DOB</InputGroupAddon>
                                    <Input placeholder="Date Of Birth" name="dob" value={this.state.fields.dob} onChange={this.handleOnChangeEvent} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <Button onClick={this.handleSignupEvent}>SignUp</Button>
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <SignupSuccessMessage color={this.state.color} message={this.state.messager} isOpen={this.state.isOpen} />
            </div>
        );
    }
}

let SignupSuccessMessage = (props) => {
    return (
        <Row className="h-100 justify-content-center align-items-center">
            <Col lg="5">
                <Alert color={props.color} isOpen={props.isOpen}>{props.message}</Alert>
            </Col>
        </Row>
    );
}