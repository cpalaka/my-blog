import React, { useReducer } from 'react'
import rawPosts from '../../../markdown'
import fromEntries from 'fromentries'

const getInitialState = () => {
    const posts = rawPosts
        .map(post => JSON.parse(post))
        .sort((a,b) => new Date(a.date) >= new Date(b.date) ? -1 : 1 )

    const unique_tags = []
        .concat(...posts.map(p=>p.tags)) //collect tags from all posts into one list
        .sort() //sort and collect tag info in list of objects
        .reduce((acc, cur)=> {
            let existing = acc.find(el=>el.name === cur)
            if(existing !== undefined) {
                existing.count++
            } else {
                acc.push({ name: cur, isSelected: false, count: 1})
            }
            return acc
        }, [])

    return { allposts: posts, tags: unique_tags, selposts: []}
}

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
            const selposts = state.allposts
                .filter(p=>p.tags.some(el => seltags.includes(el)))
                .sort((a,b) => new Date(a.date) >= new Date(b.date) ? -1 : 1 )

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
    const [ state, dispatch ] = useReducer(reducer, getInitialState())
    return props.children(state, dispatch)
}

export default BlogContainer