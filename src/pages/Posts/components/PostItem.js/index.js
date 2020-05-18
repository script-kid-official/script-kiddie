import React from 'react'
import { ListItem, Typography, Divider } from '@material-ui/core'

const PostItem = ({ post }) => {
    return (
        <>
            <ListItem>
                <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                </Typography>
            </ListItem>
            <ListItem>
                <Typography gutterBottom variant="body1" component="p">
                    {post.body}
                </Typography>
            </ListItem>
            <Divider />
        </>
    )
}

export default PostItem
