import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getSavedPosts } from '../../../actions/users';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId, myPosts }) => {
  // const { posts, isLoading } = useSelector((state) => state.posts);
  const { posts, isLoading } = useSelector((state) => state.savedPosts);

  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  

  useEffect(() => {
    if(!myPosts && !posts){
      dispatch(getSavedPosts(user?.result?._id));
    }
  }, [posts]);


  if (!posts?.savedPosts?.length === 0 && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress size='10rem' /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.savedPosts?.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
