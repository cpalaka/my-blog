import React from 'react'
import { Link } from 'react-router-dom'
import './BlogPost.css'

const BlogPost = (props) => {
    // console.log('date',new Date(props.date).toString())
    return (
        <div className='blog-post'>
            <Link to={'blog/' + props.url }><h1>{props.title}</h1></Link>
            {/* <h1>{props.title}</h1> */}
            <p>{props.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.content}} />
            {props.tags.map(t => 
                <p style={{ display: 'inline-block', margin: '5px'}} key={t}>{t}</p>)}
        </div>
    )
}

export default BlogPost