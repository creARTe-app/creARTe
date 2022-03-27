import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
// import React, { useState } from 'react';
// import CustomPopupR from '../components/Posts/Post/PopUpReport/PopUp'

// const [visibilityR, setVisibilityR] = useState(false);

// const popupCloseHandlerR = (e) => {
//   console.log('post reported pop up')
//   setVisibilityR(e);
// };

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
    alert("Email or Password is incorrect");
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
    alert("Email already exists");
    // document.location.reload()
    
    // return (
    // <CustomPopupR onClose={popupCloseHandlerR} show={visibilityR} title="Email already exists">
    //   <p>The email entered already exists, please use a diffrent email</p>
    // </CustomPopupR>
    // )
  }
};
