import React, { useState, useEffect } from 'react';
import "./App.css";
import ChatBody from './components/chatBody/ChatBody';
import Nav from './components/nav/Nav';
import Grid from '@material-ui/core/Grid';
import  {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    return (
    <div className='_main'>
        <Nav/>
        <ChatBody/>
    </div>
    )
}

export default App;