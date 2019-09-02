import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

class LoginPage extends Component {
  handleLoginSuccess = () => {
    const { history } = this.props;

    history.push('/country');
  };

  render() {
    return (
      <>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </>
    );
  }
}

export default LoginPage;
