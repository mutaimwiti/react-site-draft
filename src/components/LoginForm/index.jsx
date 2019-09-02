import React, {Component} from 'react';
import {auth} from '../../utils/app/auth';

class LoginForm extends Component {
  state = {
    username: 'admin',
    password: 'admin',
  };

  handleLogin = (success, data) => {
    if (success) {
      const {onLoginSuccess} = this.props;
      // handle success - toast success msg - update ui accordingly
      onLoginSuccess(data);
    } else {
      // handle error - toast error msg - display errors - update ui accordingly
      // console.log(data);
    }
  };

  render() {
    const {username, password} = this.state;

    // credentials from login form
    const credentials = {username, password};

    return (
      <>
        <button onClick={() => auth.login(credentials, this.handleLogin)}>
          Login
        </button>
      </>
    )
  }
}

export default LoginForm;
