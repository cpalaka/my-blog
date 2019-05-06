import React, { useContext } from 'react'
import { PostsContext } from '../BlogPage'
import BlogPost from '../BlogPost'

const PostView = (props) => {
    const {
        state: { 
            allposts: allposts,
            selposts: selposts,
            tags: tags 
        },
        dispatch: dispatch
    } = useContext(PostsContext)
    const posts = selposts.length === 0 ? allposts : selposts
    return (
        posts.map(post => <BlogPost {...post} key={post.title} />)
    )
}

export default PostView