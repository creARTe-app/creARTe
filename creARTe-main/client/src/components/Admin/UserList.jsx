import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Typography, TextField, Button } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import Navbar from '../Navbar/Navbar';


import {getAllUsers, deleteUser} from '../../actions/users'

const UserList = () => {

  const currentUser = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const [users, setUsers] = useState(null);
  const classes = useStyles();

  useEffect(() => {

    const fetchUsers = async () => {
      const getUsers = await dispatch(getAllUsers());
      const u = getUsers.users?.filter(user => user?.role !== 'admin');
      setUsers(u);
    }

    if(!users){
        fetchUsers();
    }
  }, [users])

  return (
  <> 
    <Navbar />
      {users && <div className={classes.outer}>
        <div className={classes.inner}>
          <div className={classes.heading}>
            <h3>Name</h3> 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <h3>Email</h3>
            <h3></h3>
          </div>
          <hr/>
          {users?.map((user) => (
          <Typography key={user.id} gutterBottom variant="subtitle1">
            <div className={classes.row}>
              <p className={classes.name}>{user.name}</p>  <p className={classes.email}>{user.email}</p> 
              {(currentUser?.result?.role === 'admin') && (
              <Button size="small" color="secondary" onClick={ async () => {
                await dispatch(deleteUser(user._id))
                setUsers(null)
                }}>
                <DeleteIcon fontSize="small" /> &nbsp; Delete
              </Button>)}
            </div>
            <hr/>
          </Typography>
          ))}
        </div>
      </div>}
  </>
  )
}

export default UserList