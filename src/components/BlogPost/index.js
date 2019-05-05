import React from 'react'
import './BlogPost.css'

const BlogPost = (props) => {
    // console.log('props',props)
    return (
        <div className='blog-post'>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.content}} />
        </div>
    )
}

export default BlogPost