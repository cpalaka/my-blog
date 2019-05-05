import React from 'react'
import { Link } from 'react-router-dom'
import PostView from '../PostView'
import TagView from '../TagView'
import BlogContainer from '../BlogContainer'
import './BlogPage.css'

const BlogPage = (props) => {
    return (
        <div className="blog-page">
            <h1>Home page</h1>
            <Link to='about'>To About</Link>
            <BlogContainer>
                {(state, setState) =>
                    <>
                        <TagView {...state} setState={setState} />
                        <PostView {...state} setState={setState} />
                    </>
                }
            </BlogContainer>
        </div>)
}

export default BlogPage