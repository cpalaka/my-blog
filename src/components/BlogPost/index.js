import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import JiggleDiv from '../JiggleDiv'
import './BlogPost.css'

const BlogPost = (props) => {
    // console.log('date',new Date(props.date).toString())
    const [ isFullPost, toggleIsFullPost ] = useState(false)

    return (
        isFullPost ?
            <div className='blog-post'>
                <Link to={'blog/' + props.url }><h1>{props.title}</h1></Link>
                {/* <JiggleDiv> */}
                    <div className={'post-button '+ (isFullPost ? 'white' : 'sapphire')} onClick={()=>toggleIsFullPost(s=> !s)} />
                {/* </JiggleDiv> */}
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
            {/* <JiggleDiv> */}
            <div className={'post-button '+ (isFullPost ? 'white' : 'sapphire')} onClick={()=>toggleIsFullPost(s=> !s)} />
            {/* </JiggleDiv> */}
        </div>
    )
}

export default BlogPost