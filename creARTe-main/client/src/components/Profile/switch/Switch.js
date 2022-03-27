import React, { useState } from 'react';
import './Switch.css';

const Switch = ({isPost, setIsPost, myPosts, setMyPosts}) => {


  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={() => {        
        setIsPost(!isPost)
        setMyPosts(!myPosts)
      }}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
      <div className="switch-current">
        <span><p>Posts</p></span>
        <span><p>Saved</p></span>
      </div>
        <span className={`react-switch-button`}>
          {isPost ? <p>Posts</p> : <p>Saved</p>}
        </span>
      </label>
    </>
  );
};

export default Switch;