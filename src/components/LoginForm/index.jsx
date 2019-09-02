import React, {Component} from 'react';
import Auth from "../../utils/app/auth";

class LoginForm extends Component {
  state = {
    username: 'admin',
    password: 'password',
  };

  handleLogin = (success, data) => {
    if (success) {
      const {onLoginSuccess} = this.props;
      // handle success - toast success msg - update ui accordingly
      onLoginSuccess(data);
    } else {
      // handle error - toast error msg - display errors - update ui accordingly
      console.log(data);
    }
  };

  render() {
    const {username, password} = this.state;

    // credentials from login form
    const credentials = {username, password};

    return (
      <>
        <button onClick={() => Auth.login(credentials, this.handleLogin)}>
          Login
        </button>
      </>
    )
  }
}

export default LoginForm;
