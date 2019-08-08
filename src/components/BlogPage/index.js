import React from 'react'
import { Link } from 'react-router-dom'
import PostView from '../PostView'
import FilterView from '../FilterView'
import BlogContainer from '../BlogContainer'
import './BlogPage.css'

export const PostsContext = React.createContext(null)

const BlogPage = (props) => {
    // console.log(props)
    return (
        <div className="blog-page">
            <BlogContainer>
                {(state, dispatch) =>
                    <PostsContext.Provider value={{ state, dispatch }}>
                        <div className="blog-page-content">
                            <PostView {...props} />
                            {/* <FilterView /> */}
                        </div>
                    </PostsContext.Provider>
                }
            </BlogContainer>
        </div>)
}

export default BlogPage