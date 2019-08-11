import React from 'react'
import { Link } from 'react-router-dom'
import PostView from '../PostView'
import FilterView from '../FilterView'
import BlogContainer from '../BlogContainer'
import './BlogPage.css'

const BlogPage = (props) => {
    // console.log(props)
    return (
        <div className="blog-page">
            <BlogContainer>
                {(state, dispatch) =>
                    <div className="blog-page-content">
                        <div className='blog-title dark-bg white-text'>BLOG TITLE</div>
                        <PostView {...props} allposts={state.allposts} selposts={state.selposts} />
                        <FilterView tags={state.tags} dispatch={dispatch} />
                    </div>
                }
            </BlogContainer>
        </div>)
}

export default BlogPage