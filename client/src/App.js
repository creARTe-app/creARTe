import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import collab from './components/Container/App';
import Profile from './components/Profile/Profile'
import UsersList from './components/Admin/UserList'
import ReportedPosts from './components/Admin/ReportedPosts'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/usersList" exact component={UsersList} />
          <Route path="/postsList" exact component={ReportedPosts} />
          <Route path="/profile" exact component={Profile} />
          
          <Route path="/collaboration" exact component= {collab} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
