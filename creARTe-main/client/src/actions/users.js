import { USERS, SAVED_POSTS, START_LOADING, END_LOADING, DELETE_USER, SAVE_POST } from '../constants/actionTypes';
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

export const getSavedPosts = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {data} = await api.getSavedPosts(id);

    dispatch({ type: SAVED_POSTS, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
    
  }
}

export const savePost = (post, user) => async (dispatch) => {
  try {
    console.log('action called');
    console.log(post);
    console.log(user);
    const { data } = await api.savePost(post, user);

    dispatch({type: SAVE_POST, payload: data});
  } catch (error) {
    console.log(error);
  }
}