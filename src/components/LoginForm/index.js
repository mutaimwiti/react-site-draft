import React, {Component} from 'react';
import Auth from "../../utils/Auth";

class LoginForm extends Component {
  render() {
    const {onLoginSuccess} = this.props;

    return (
      <>
        <button onClick={() => Auth.login(onLoginSuccess)}>Login</button>
      </>
    )
  }
}

export default LoginForm;
