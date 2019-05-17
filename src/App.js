import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import BlogPage from './components/BlogPage'
import BlogPost from './components/BlogPost'
import AboutPage from './components/AboutPage'
import rawPosts from '../markdown'
import "./App.css";

const posts = rawPosts.map(post => JSON.parse(post))

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
                            render={props => <BlogPost {...p}  />}
                        />
                    )}
                    {/* on error */}
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
    )
}

const Error = (props) => <h1>404 GTFO</h1>

export default hot(module)(App);