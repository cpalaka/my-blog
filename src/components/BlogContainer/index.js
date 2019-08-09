import React, { useReducer } from 'react'
import rawPosts from '../../../markdown'
import { blogDataFromRawMds, filterPostsWithTags } from '../utils/functions'
import fromEntries from 'fromentries'

const reducer = (state, action) => {
    switch(action.type) {
        case 'select_tag':
            // flip isSelected flag on current selected tag
            const tags =  state.tags.map(t => t.name === action.tag ? { ...t, isSelected: !t.isSelected } : t)
            // construct list of currently selected tags
            let seltags = state.tags.filter(t => t.isSelected).map(t => t.name)

            if(seltags.includes(action.tag)) { // tag is getting deselected (remove)
                seltags = seltags.filter(t => t !== action.tag)
            } else { //tag is getting selected (add)
                seltags.push(action.tag)
            }
            // use seltags to construct list of selected posts
            const selposts = filterPostsWithTags(state.allposts, seltags)

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
    const [ state, dispatch ] = useReducer(reducer, blogDataFromRawMds(rawPosts))
    return props.children(state, dispatch)
}

export default BlogContainer