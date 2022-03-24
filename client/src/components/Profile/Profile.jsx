import "./profile.css"
import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';

const Profile = () => {


  const [user, setUser] = useState(null)
  const [post, setPost] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('profile'));
    setUser(u)

    // const p = dispatch(fetchPost)

  }, [user])

  return (
    <>
{
  user && <div className="profile">
  <div className="profileRight">
  <div className="profileRightTop">
    <div className="profileCover">
    <div className="initial-letter">
      
      <p>{user?.result?.name[0]}</p>
      </div>
    </div>
   
    <div className= "profileInfo">
      <h4 className= "profileInfoName" >{user?.result?.name}</h4>
      <span className= "profileInfoDesc" ></span>
    </div>
  </div> 
  <div className="profileRightBottom"></div>
  </div>
  
</div>
}
    </>
  )
}

export default Profile