import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import BlogPage from './components/BlogPage'
import HomePage from './components/HomePage'
import BlogPost from './components/BlogPost'
import AboutPage from './components/AboutPage'
import TagPage from './components/TagPage'
import { blogDataFromRawMds, filterPostsWithTags } from './components/utils/functions'
import rawPosts from '../markdown'
import "./App.css";

const blogData = blogDataFromRawMds(rawPosts) 

const App = (props) => {  
    console.log('bd', blogData) 
    return (
        <Router>
            <div className='app'>
                <Sidebar />
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
                    {blogData.allposts.map(p =>
                        <Route
                            exact
                            path={'/blog/' + p.url}
                            key={p.url}
                            render={props => <BlogPost {...p} />}
                        />
                    )}
                    {blogData.tags.map(t =>
                        <Route
                            exact
                            path={'/tag/' + t.name}
                            key={t.name}
                            render={props => <TagPage {...t} {...props} posts={filterPostsWithTags(blogData.allposts, [t.name])} />}
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