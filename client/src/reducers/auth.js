import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();
      return {};

    default:
      return state;
  }
};

export default authReducer;
