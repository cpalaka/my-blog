import React from 'react'
import './BlogPost.css'

const BlogPost = (props) => {
    // console.log('props',props)
    return (
        <div className='blog-post'>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.content}} />
            {props.tags.map(t => 
                <p style={{ display: 'inline-block', margin: '5px'}} key={t}>{t}</p>)}
        </div>
    )
}

export default BlogPost