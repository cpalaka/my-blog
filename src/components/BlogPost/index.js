import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import './BlogPost.css'

const BlogPost = (props) => {
    // console.log('date',new Date(props.date).toString())
    const [ isFullPost, toggleIsFullPost ] = useState(true)

    return (
        isFullPost ?
            <div className='blog-post'>
                <Link to={'blog/' + props.url }><h1>{props.title}</h1></Link>
                <div className={'post-button '+ (isFullPost ? 'white' : 'sapphire')} onClick={()=>toggleIsFullPost(s=> !s)} />
                {/* <h1>{props.title}</h1> */}
                <p>{props.date}</p>
                <div dangerouslySetInnerHTML={{__html: props.content}} />
                {props.tags.map(t => 
                    <p style={{ display: 'inline-block', margin: '5px'}} key={t}>{t}</p>)}
            </div>
        :
        <div className='hidden-post'>
            <p>{props.date}</p>
            <h1>{props.title}</h1>
            <div className={'post-button '+ (isFullPost ? 'white' : 'sapphire')} onClick={()=>toggleIsFullPost(s=> !s)} />
        </div>
    )
}

export default BlogPost