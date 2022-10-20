import {USERS} from '../store';

const initialState = {
  userInfo: {
    total: 0,
  },
};

const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case USERS.LOGIN.SUCCESS: {
      return {...state, token: action.payload.token, userInfo: action.payload};
    }
    default:
      return state;
  }
};

export default userLogin;
