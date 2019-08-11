import React, { useState } from 'react'
import Tag from '../Tag'
import './FilterView.css'

const FilterView = ({ tags, dispatch }) => {
    const [shown, setShown] = useState(false)

    console.log('tags', tags)
    return (
        <div className={`filter-view white-bg ${shown ? 'show' : 'hide'}`}>
            <div className={`filter-tags-box`}>
                <div className='tags'>{tags.map(tag =>
                    <div onClick={() => dispatch({ type: 'select_tag', tag: tag.name })}>
                        <Tag {...tag} key={tag.name} >{tag}</Tag>
                    </div>)}
                </div>
                <div className='show-tags-btn' onClick={() => setShown(prevS => !prevS)}>filter by tags</div>
            </div>
        </div>
    )
}

export default FilterView