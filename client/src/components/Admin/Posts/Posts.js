import React, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import { getReportedPosts } from '../../../actions/posts';

const Posts = ({ setCurrentId, loadPosts, setLoadPosts }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  const dispatch = useDispatch()

  useEffect(() => {
    if(!posts || posts?.length <= 0 || !loadPosts){
      dispatch(getReportedPosts(1));
      setLoadPosts(!loadPosts);

    }
  }, [posts]);

  if (!posts.length && !isLoading) return 'No posts';

  return (
    isLoading ? <CircularProgress size='10rem' /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
          (post?.status === 'red') && (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
          )
        ))}
      </Grid>
    )
  );
};

export default Posts;
