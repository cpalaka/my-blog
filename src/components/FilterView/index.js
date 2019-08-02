import React, { useContext, useState } from 'react'
import { PostsContext } from '../BlogPage'
import Tag from '../Tag'
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
    console.log('tags',tags)
    return (
        <div className='filter-view'>
            {/* {tags.map(tag =>
                <div
                    className={tag.isSelected ? 'tag cadet' : 'tag'}
                    key={tag.name}
                    onClick={e => dispatch({ type: 'select_tag', tag: tag.name })} >
                        <div>{tag.name}</div>
                        <div>{tag.count}</div>
                </div>
            )} */}
            {/* <div className='filter-body' />
            <div className='filter-toggle' onClick={()=>setShowFilter(prev => !prev)}/> */}

            <div className="filter-tags">
                {tags.map(tag => <Tag {...tag} key={tag.name}>{tag}</Tag>)}
            </div>
        </div>
    )
}

export default FilterView