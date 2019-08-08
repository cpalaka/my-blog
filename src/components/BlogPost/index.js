import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Hoverable from '../utils/Hoverable'
// import './BlogPost.css'
import './BlogPost.css'


const BlogPost = (props) => {
    const [isFull, setIsFull] = useState(false)
    return (
        <div className='blog-post'>
            <Hoverable>
                {s =>
                <div className={`${ s ? 'grey' : ''}`}>
                    <div className='showmore' onClick={()=>setIsFull(prev=>!prev)}>{isFull ?'-':'+'}</div>
                    <div className='header'>
                        
                        <div className="title">{props.title.toUpperCase()}</div>
                        <div className="date">{props.date}</div>
                    </div>
                    
                </div>
                }
            </Hoverable>
            <div className="tags">{props.tags.map((t,i) => (i!=0?'/':'')+t)}</div>
            <div className={`post-preview ${isFull ? 'show' : 'hide'}`} dangerouslySetInnerHTML={{ __html: props.content }}>
            </div>

        </div>
    )
}

export default BlogPost