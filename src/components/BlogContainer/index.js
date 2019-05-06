import React, { useReducer } from 'react'
import rawPosts from '../../../markdown'

const getInitialState = () => {
    const posts = rawPosts.map(post => {
        const parsed_post = JSON.parse(post)
        const obj = Object.fromEntries(Object.keys(parsed_post).map(k=>[k, parsed_post[k]]))
        return obj
    })
    
    const unique_tags = []
        .concat(...posts.map(p=>p.tags))
        .sort()
        .map((curr, i, arr) => i != 0 && curr == arr[i-1] ? null : curr)
        .filter(v => v !== null)
        .map(tag=>({ name: tag, isSelected: false}))

    return { allposts: posts, tags: unique_tags, selposts: []}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'select_tag':
            // construct new tags list with action.tag selected
            const tags =  state.tags.map(t => t.name === action.tag ? { ...t, isSelected: !t.isSelected } : t)
            // construct list of currently selected tags
            let seltags = state.tags.filter(t => t.isSelected).map(t => t.name)

            if(seltags.includes(action.tag)) { // tag is getting deselected (remove)
                seltags = seltags.filter(t => t !== action.tag)
            } else { //tag is getting selected (add)
                seltags.push(action.tag)
            }
            // use seltags to construct list of selected posts
            const selposts = state.allposts.filter(p=>p.tags.some(el => seltags.includes(el)))
            return  {
                ...state,
                selposts: selposts,
                tags: tags
            }
        default:
            console.log("reducer error")
            return state
    }
}

const BlogContainer = (props) => {
    // console.log(init_blog_state)
    const [ state, dispatch ] = useReducer(reducer, getInitialState())
    return props.children(state, dispatch)
}

export default BlogContainer