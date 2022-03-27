import React, { useState, useEffect } from 'react';

import MyPosts from './MyPosts/Posts';
import SavedPosts from './SavedPosts/Posts'
import Navbar from '../Navbar/Navbar';
import Switch from './switch/Switch';
import useStyles from './styles';

const Profile = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const [isPost, setIsPost] = useState(true);
  const [myPosts, setMyPosts] = useState(true);



  return (
    <>
    <Navbar />
    <div className={classes.mainCard}>
      <Switch setIsPost={setIsPost} isPost={isPost} myPosts={myPosts} setMyPosts={setMyPosts} />
    </div>
    {isPost &&
      <MyPosts setCurrentId={setCurrentId} myPosts={myPosts} setMyPosts={setMyPosts} /> 
    }
    {!isPost &&
      <SavedPosts setCurrentId={setCurrentId} myPosts={myPosts} />
    }
    </>
  )
}

export default Profile