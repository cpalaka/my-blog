import React, { useContext } from 'react'
import { PostsContext } from '../BlogPage'
import './TagView.css'

const TagView = (props) => {
    // console.log(props)
    const {
        state: {
            allposts: allposts,
            tags: tags
        },
        dispatch: dispatch
    } = useContext(PostsContext)

    return (
        <div className="tag-view">
            {tags.map(tag =>
                <div
                    className={tag.isSelected ? 'tag cadet' : 'tag'}
                    key={tag.name}
                    onClick={e => dispatch({ type: 'select_tag', tag: tag.name })} >
                        <div>{tag.name}</div>
                        <div>{tag.count}</div>
                </div>
            )}
        </div>
    )
}

export default TagView