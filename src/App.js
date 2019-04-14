import React, { Component } from "react";
import {hot} from "react-hot-loader";
import pic from '../images/pic1.jpg'
// import pic2 from '../images/atsdhmg8by811.png'
import "./App.css";
import mdfile1 from '../markdown/example.md'
import mdfile2 from '../markdown/testpost1.md'
import mdfile3 from '../markdown/testpost2.md'


class App extends Component {
    render() {
        let md1 = JSON.parse(mdfile1)
        let md2 = JSON.parse(mdfile2)
        let md3 = JSON.parse(mdfile3)
        console.log('mdfile1',md1)
        console.log('mdfile2',md2)
        console.log('mdfile3',md3)
        return (
            <div className="App">
                <h1> Hello, World!</h1>
                <img src={pic} alt='pic' />
                {/* <img src={pic2} alt='pic' /> */}
                <div dangerouslySetInnerHTML={{__html: md1.content}} />
                {/* <div style={{height: '100px', color: 'black'}} */}
                <div dangerouslySetInnerHTML={{__html: md2.content}} />
                {/* <div style={{height: '100px', color: 'black'}} */}
                <div dangerouslySetInnerHTML={{__html: md3.content}} />
                {/* <div style={{height: '100px', color: 'black'}} */}
            </div>
        );
    }
}

export default hot(module)(App);