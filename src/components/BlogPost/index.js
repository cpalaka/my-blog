import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tag from '../Tag'
import Hoverable from '../utils/Hoverable'
// import './BlogPost.css'
import './BlogPost.css'

const BlogPost = (props) => {
    const [isFull, setIsFull] = useState(false)
    console.log('lll',props)
    return (
        <div className='blog-post dark-text'>
            <Hoverable>
                {s =>
                    <>
                        <div className='showmore' onClick={() => setIsFull(prev => !prev)}>{isFull ? '-' : '+'}</div>
                        <div className={`${s ? 'blue-text blogtitle-zoom ' : ''}`}>
                            <div className='header' onClick={()=>props.history.push('/blog/'+props.url)}>
                                <div className="title">{props.title.toUpperCase()}</div>
                                <div className="date">{new Date(props.date).toDateString().substring(4)}</div>
                            </div>
                        </div>
                    </>
                }
            </Hoverable>
            <div className="tags grey-text">{props.tags.map(
                (t, i) =>
                    <>
                        {i != 0
                            ? <div>/</div>
                            : null
                        }
                        <Hoverable>
                            {st => <div onClick={() => props.history.push('/tag/' + t)} className={`${st ? 'red-text' : ''}`}>{t}</div>}
                        </Hoverable>
                    </>
            )}
            </div>
            <div className={`post-preview ${isFull ? 'show' : 'hide'}`} >
                <div className='content' dangerouslySetInnerHTML={{ __html: props.content }} />
                <Hoverable>
                    {s=><div className={`dots-link ${s?'red-text':''}`}>{s?'> > >':'. . .'}</div>}
                </Hoverable>
            </div>

        </div>
    )
}

export default BlogPost