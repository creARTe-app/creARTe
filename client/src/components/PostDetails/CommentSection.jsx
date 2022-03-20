import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

import { commentPost, deleteComment } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async () => {
    const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));

    setComment('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDeleteComment = async (comment_id) => {
    const newComments = await dispatch(deleteComment(comment_id, post._id))
    setComments(newComments);
  }

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">Comments</Typography>
          {comments?.map((c) => (
            <Typography key={c._id} gutterBottom variant="subtitle1">
              <strong>{c.comment.split(': ')[0]}</strong>
              {c.comment.split(':')[1]}
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator || user?.result?.role == 'admin') && (
              <Button size="small" color="secondary" onClick={() => handleDeleteComment(c._id)}>
                <DeleteIcon fontSize="small" /> &nbsp; Delete
              </Button>)}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
        {user?.result?.name && (
        <div style={{ width: '80%' }}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField fullWidth rows={2} variant="outlined" label="Comment" multiline value={comment} onChange={(e) => setComment(e.target.value)} />
          <br />
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} className={classes.commentButton} variant="contained" onClick={handleComment}>
            Comment
          </Button>
        </div> )}
      </div>
    </div>
  );
};

export default CommentSection;
