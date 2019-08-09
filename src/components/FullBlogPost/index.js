import React, { useState } from 'react'
import Hoverable from '../utils/Hoverable'
import DisqusThread from '../DisqusThread'
import './FullBlogPost.css'

const FullBlogPost = (props) => {
    console.log('pp',props)

    return (
        <div className='fullblog post-view dark-text'>
            <div className='blog-title dark-bg white-text'>{props.title}</div>
            <div className='content' dangerouslySetInnerHTML={{ __html: props.content }}></div>
            <DisqusThread title={props.title} path={'/blog/'+props.url} />
        </div>
    )
}

export default FullBlogPost