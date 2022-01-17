import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/auth" element={<Auth/>} />
      </Routes>
    </Container>
  </BrowserRouter>
  );
};

export default App;
