import React from 'react'
import Post from '../Posts/Post/Post'
import useStyles from './styles.js'

function Posts() {
    const classes = useStyles();
    return (
        <>
        <h1>POSTS</h1>
        <Post/>
        <Post/>
        </>
    )
}

export default Posts
