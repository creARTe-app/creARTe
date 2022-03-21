import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';

export default function MenuPopupState() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };
  const classes = useStyles();

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button className={classes.dashboard} variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)} >
            {(user?.result?.role === 'admin') && (
            <MenuItem className={classes.adminOption} onClick={popupState.close} component={Link} to="/adminPage">Admin Page</MenuItem>
            )}
            <MenuItem className={classes.options} onClick={popupState.close} component={Link} to="/">Home</MenuItem>
            <MenuItem className={classes.options} onClick={popupState.close} component={Link} to="/profile">Profile</MenuItem>
            <MenuItem className={classes.options} onClick={popupState.close} component={Link} to="/chats">Chat</MenuItem>
            <MenuItem className={classes.logout} onClick={logout} component={Link} to="/auth">Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}