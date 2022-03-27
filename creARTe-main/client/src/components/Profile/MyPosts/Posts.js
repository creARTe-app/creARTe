import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../../actions/posts';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch()

  useEffect(() => {
    if(!posts || posts?.length <= 0){
      dispatch(getPosts(1));
    }
  }, [posts]);

  if (!posts.length && !isLoading) return 'No posts';


  return (
    isLoading ? <CircularProgress size='10rem' /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          (post?.creator === user?.result._id) && (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        )))}
      </Grid>
    )
  );
};

export default Posts;
