import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import BlogPage from './components/BlogPage'
import AboutPage from './components/AboutPage'
import "./App.css";

const App = (props) => {
    return (
        <Router>
            <div className='app isabelline'>
                <Sidebar />
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={BlogPage}
                    />
                    <Route
                        path="/about"
                        component={AboutPage}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default hot(module)(App);