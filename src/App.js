import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import BlogPage from './components/BlogPage'
import HomePage from './components/HomePage'
import BlogPost from './components/BlogPost'
import AboutPage from './components/AboutPage'
import rawPosts from '../markdown'
import "./App.css";

const posts = rawPosts.map(post => JSON.parse(post))

const App = (props) => {
    return (
        <Router>
            <div className='app'>
                {/* <Sidebar /> */}
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={HomePage}
                    />
                    <Route
                        path="/blog"
                        exact
                        component={BlogPage}
                    />
                    <Route
                        exact
                        path="/about"
                        component={AboutPage}
                    />
                    {/* TODO : clean up routes */}
                    {posts.map(p =>
                        <Route
                            exact
                            path={'/blog/' + p.url}
                            key={p.url}
                            render={props => <BlogPost {...p} />}
                        />
                    )}
                    {/* on error */}
                    <Route component={Error} />
                </Switch>
            </div>
        </Router >
    )
}

const Error = (props) => <h1>404 GTFO</h1>

export default hot(module)(App);