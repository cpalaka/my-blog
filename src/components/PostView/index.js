import React, { useContext } from 'react'
import { PostsContext } from '../BlogPage'
import BlogPost from '../BlogPost'
import JiggleDiv from '../JiggleDiv'
import './PostView.css'
const PostView = (props) => {
    const {
        state: { 
            allposts: allposts,
            selposts: selposts,
            tags: tags 
        },
        dispatch: dispatch
    } = useContext(PostsContext)
    // console.log(allposts)
    const posts = selposts.length === 0 ? allposts : selposts
    console.log(posts)
    return (
        <div className='post-view'>
            {posts.map(post =>
                <BlogPost {...post} key={post.title} />
            )}
        </div>
    )
}

export default PostView