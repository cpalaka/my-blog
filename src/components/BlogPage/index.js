import React from 'react'
import { Link } from 'react-router-dom'
import PostView from '../PostView'
import TagView from '../TagView'
import BlogContainer from '../BlogContainer'
import './BlogPage.css'

export const PostsContext = React.createContext(null)

const BlogPage = (props) => {
    return (
        <div className="blog-page">
            <h1>Home page</h1>
            <Link to='about'>To About</Link>
            <BlogContainer>
                {(state, dispatch) =>
                    <PostsContext.Provider value={{state, dispatch}}>
                        <TagView />
                        <PostView />
                    </PostsContext.Provider>
                }
            </BlogContainer>
        </div>)
}

export default BlogPage