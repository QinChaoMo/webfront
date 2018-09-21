import { combineReducers } from 'redux';

// const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
// function UserSigninActionCreator() {
//   return {
//     type: 'SIGNIN_SUCCESS',
//     payload: 'signin success',
//   };
// }

function User(state = { id: null, name: null, theme: 'dark' }, action) {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return Object.assign({}, state, { status: 'SIGNIN_SUCCESS' });
    default:
      return state;
  }
}

const rootReducer = combineReducers({ user: User });

export default rootReducer;
