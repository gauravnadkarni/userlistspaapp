import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    //NavLink as NavigationLink,
    /*UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem*/
} from 'reactstrap';
import {
    //BrowserRouter as Router,
    //Route,
    //Link,
    //Redirect,
    //withRouter,
    NavLink
} from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">User Profile</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/signin">
                                SignIn
                                </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/signup">
                                SignUp
                                </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}