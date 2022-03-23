import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import done from '../../../../images/done.png'
import { getPost, deletePost, postGreenStatus } from '../../../../actions/posts';
import useStyles from './styles';
import CustomPopup from './PopUp'

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();
  const [posts, setPosts] = useState(null);
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    console.log('post reported pop up')
    setVisibility(e);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const getPosts = await dispatch((getPost))
      setPosts(getPosts.posts);
    }

    if(!posts){
        fetchPosts();
    }
  }, [posts])

  const openPost = (e) => {
    dispatch(getPost(post._id, history));

    history.push(`/posts/${post._id}`);
  };

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role === 'admin') && (
        <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(post._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role === 'admin') && (
          <Button className={classes.reportDiv} onMouseEnter={onHover} onMouseLeave={onLeave} onClick={ async () => {
            setPosts(null);
            await dispatch(postGreenStatus(post._id))
            setVisibility(!visibility);
          }}>
            <img className={classes.done} src={done} /> &nbsp; &nbsp; 
            <p> Turn status green </p>
          </Button>
        )}
          <CustomPopup
            onClose={popupCloseHandler}
            show={visibility}
            title="Post status turned green"
          >
            <p>Post had no offensive content </p>
          </CustomPopup>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role === 'admin') && (
          <Button size="small" color="secondary" onClick={() => 
            {dispatch(deletePost(post._id))
              history.push('/');
            }}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
