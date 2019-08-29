import React, {Component} from 'react';
import Auth from "../../utils/Auth";

class LoginForm extends Component {
  handleClick = () => {
    const {history} = this.props;

    Auth.login(() => {
      history.push('/country');
    })
  };


  render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>Login</button>
      </>
    )
  }
}

export default LoginForm;
