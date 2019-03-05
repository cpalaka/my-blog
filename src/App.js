import React, { Component } from "react";
import {hot} from "react-hot-loader";
import pic from '../images/pic1.jpg'
import "./App.css";
import mdfile from '../markdown/example.md'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World!</h1>
                <img src={pic} alt="just a pic" />
                <div dangerouslySetInnerHTML={{__html: mdfile}} />
            </div>
        );
    }
}

export default hot(module)(App);