import { AuthAction, AuthState } from '../type';
import * as actionTypes from './actionTypes';

const initialState: AuthState = {
  isAuth: false,
  name: 'User',
  email: 'use@email.com',
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case actionTypes.LOGIN_EMAIL:
      return {
        ...state,
        isAuth: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
  }

  return state;
};

export default authReducer;
