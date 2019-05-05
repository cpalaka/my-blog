import React from 'react'
import './TagView.css'

const TagView = (props) => {
    // console.log(props)
    const toggleTag = (tag) => {
        // console.log(tag)
        props.setState(prevState => {
            const modPosts = prevState.posts.map(p => 
                p.tags.includes(tag)
                ? ({
                    ...p,
                    display: false
                })
                : p
                // console.log(p)
            )
            console.log(modPosts)
            return (prevState

            )
        })
    }

    return (
        props.tags.map(tag => 
            <div className='tag' key={tag} onClick={e => toggleTag(tag)} >{tag}</div>
        )
    )
}

export default TagView