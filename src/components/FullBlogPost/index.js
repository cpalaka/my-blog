import React, { useState } from 'react'
import Hoverable from '../utils/Hoverable'
import DisqusThread from '../DisqusThread'
import './FullBlogPost.css'

const FullBlogPost = (props) => {
    console.log('pp', props)

    return (
        <div className='fullblog dark-text'>
            <div className='blog-title dark-bg white-text'>{props.title}</div>
            <div className="meta">
                <div className="date ">{new Date(props.date).toDateString().substring(4)}</div>
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
                )}</div>
            </div>
            <div className='content' dangerouslySetInnerHTML={{ __html: props.content }}></div>
            <DisqusThread title={props.title} path={'/blog/' + props.url} />
        </div>
    )
}

export default FullBlogPost