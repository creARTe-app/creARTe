import { USERS, START_LOADING, END_LOADING, DELETE_USER } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const {data} = await api.fetchUsers();
        return data

    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    console.log(error);
  }
};