import "./profile.css"
import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
          <img className="profileCoverImg" 
              src="assets/post/3.jpeg" 
              alt="" 
              />
          <img className="profileUserImg" 
               src="assets/person/7.jpeg" 
               alt="" 
               />
         </div>
          <div className= "profileInfo">
            <h4 className= "profileInfoName" >Sai Shriya</h4>
            <span className= "profileInfoDesc" >hello everyone</span>
          </div>
        </div> 
        <div className="profileRightBottom"></div>
         <Feed />
         <Rightbar />
        </div>
        
      </div>
    </>
  )
}

export default Profile