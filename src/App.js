import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';
import {
  BrowserRouter as Router,
  //Route,
  //Link,
  //Redirect,
  //withRouter,
  //NavLink
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
