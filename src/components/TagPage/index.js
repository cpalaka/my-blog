import React from 'react'
import BlogPost from '../BlogPost'
import './TagPage.css'

const TagPage = (props) => {
    console.log('tagprops',props)
    return (
        <div className="blog-page">
            <div className='tag-title'>Posts tagged with <span className='red-bg'>{props.name}</span></div>
            <div className='post-view'>
                {props.posts.map(post =>
                    <BlogPost {...post} key={post.title} history={props.history} />
                )}
            </div>
        </div>)
}

export default TagPage