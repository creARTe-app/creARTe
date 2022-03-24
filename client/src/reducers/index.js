import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import savedPosts from './savedPosts'

export const reducers = combineReducers({ posts, auth, savedPosts });
