import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Hoverable from '../utils/Hoverable'
// import './BlogPost.css'
import './BlogPost1.css'

const BlogPost1 = (props) => {
    console.log(props)
    return (
        <div className='blog-post'>
            <div className="blog-date">{props.date}</div>
            <div className='blog-header'>
                <div className="blog-title">{props.title}</div>
                <div className="blog-tags">{props.tags.map(t => <Tag name={t} key={t}>{t}</Tag>)}</div>
            </div>
            <div className="inner-blog">
                {/* <Link to={'blog/' + props.url}></Link> */}
                <div dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>
            <div className="full-post-link"></div>
        </div>
    )
}

const BlogPost = (props) =>
    <div className='blog-post'>
        <Hoverable>
            {s =>
                <div className={`header ${ s ? 'red' : ''}`}>
                    <div className="title">{props.title}</div>
                    <div className="date">{props.date}</div>
                </div>
            }
        </Hoverable>
        <div className="tags">{props.tags.map(t => t+'/')}</div>
    </div>

export default BlogPost