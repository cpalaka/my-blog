import React, { useContext, useState } from 'react'
import { PostsContext } from '../BlogPage'
import './FilterView.css'

const FilterView = (props) => {
    // console.log(props)
    const [ showFilter, setShowFilter ] = useState(false)

    const {
        state: {
            allposts: allposts,
            tags: tags
        },
        dispatch: dispatch
    } = useContext(PostsContext)

    return (
        <div className={`filter-view ${showFilter ? 'show' : 'hide'}`}>
            {/* {tags.map(tag =>
                <div
                    className={tag.isSelected ? 'tag cadet' : 'tag'}
                    key={tag.name}
                    onClick={e => dispatch({ type: 'select_tag', tag: tag.name })} >
                        <div>{tag.name}</div>
                        <div>{tag.count}</div>
                </div>
            )} */}
            <div className='filter-body' />
            <div className='filter-toggle' onClick={()=>setShowFilter(prev => !prev)}/>
        </div>
    )
}

export default FilterView