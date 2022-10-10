import User from '../../models/User';
import {LOGIN} from '../actions/authActions';

const initialState = {
  users: [new User('linh@gmail.com', '123456')],
  loginedEmail: '',
};

export default (state = initialState, actions) => {
  const {type, user} = actions;
  switch (type) {
    case LOGIN:
      const loginedUser = state.users.find(
        item => item.email === user.email && item.password === user.password,
      );
      return {...state, loginedEmail: loginedUser ? loginedUser.email : ''};

    default:
      return state;
  }
};


const mapStateToProps = (state) => ({
    loginedEmail: state.auths.loginedEmail,
});

const mapDispatchToProps = (dispatch) => ({
    login: async (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)