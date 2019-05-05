import React from 'react'
import BlogPost from '../BlogPost'

const PostView = (props) => {
    console.log(props)
    return (
        props.posts.map(post => <BlogPost {...post} key={post.title} />)
    )
}

export default PostView