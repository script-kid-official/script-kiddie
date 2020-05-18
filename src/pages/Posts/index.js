import React, { useState, useEffect } from 'react'
import { Typography, List } from '@material-ui/core'
import PostItem from './components/PostItem.js'
import { fetchPostsData } from 'api'

const Posts = () => {
    const [posts, setPosts] = useState(false)
    useEffect(() => { getPostData() }, [])

    const getPostData = async () => {
        try {
            const postData = await fetchPostsData();
            setPosts(postData)
        } catch (error) {
            console.warn(error)
        }
    }
    return (
        <section className="Posts" style={{ textAlign: 'center', margin: '2em 0' }}>
            <Typography gutterBottom variant="h4" component="h1">
                Posts Page
                </Typography>
            {!posts && <div>Loading</div>}

            <List>
                {(posts.length > 0) && posts.map(post => { return <PostItem key={post.id} post={post} /> })}
            </List>

        </section>
    )
}

export default Posts
