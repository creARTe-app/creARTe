import React, { useState } from 'react'
import Posts from './Posts/Posts';
import Navbar from '../Navbar/Navbar';



const PostsList = () => {
  const [currentId, setCurrentId] = useState(0);

  return (
    <>
      <Navbar />
      <Posts setCurrentId={setCurrentId} />
    </>
  )
}

export default PostsList