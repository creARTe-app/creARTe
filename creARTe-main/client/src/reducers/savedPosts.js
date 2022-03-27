import { SAVED_POSTS }from '../constants/actionTypes';

export default (state = { isLoading: true, posts: null }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case SAVED_POSTS:
        return {
            ...state,
            posts: action.payload,
            currentPage: action.payload.currentPage,
            numberOfPages: action.payload.numberOfPages,
        };
    default:
      return state;
  
    }
}