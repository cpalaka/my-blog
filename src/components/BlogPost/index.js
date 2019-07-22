import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import JiggleDiv from '../JiggleDiv'
import Tag from '../Tag'
import './BlogPost.css'

const BlogPost = (props) => {
    console.log(props)
    return (
        <div className='blog-post'>
            <div className="blog-date">{props.date}</div>
            <div className='blog-header'>
                <div className="blog-title">{props.title}</div>
                <div className="blog-tags">{props.tags.map(t => <Tag tagName={t} key={t}>{t}</Tag>)}</div>
            </div>
            <div className="inner-blog">
                {/* <Link to={'blog/' + props.url}></Link> */}
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>
            <div className="full-post-link"></div>
        </div>
    )
}

export default BlogPost