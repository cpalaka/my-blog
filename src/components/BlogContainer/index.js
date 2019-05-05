import React, { useState } from 'react'
import rawPosts from '../../../markdown'

const posts = rawPosts.map(post => {
    const parsed_post = JSON.parse(post)
    const obj = Object.fromEntries(Object.keys(parsed_post).map(k=>[k, parsed_post[k]]))
    return {...obj, display: true }
})

const unique_tags = []
    .concat(...posts.map(p=>p.tags))
    .sort()
    .map((curr, i, arr) => i != 0 && curr == arr[i-1] ? null : curr.trim())
    .filter(v => v !== null)

const init_blog_state = { posts: posts, tags: unique_tags}

const BlogContainer = (props) => {
    // console.log(init_blog_state)
    const [ state, setState ] = useState(init_blog_state)
    return ( props.children(state, setState) )
}

export default BlogContainer