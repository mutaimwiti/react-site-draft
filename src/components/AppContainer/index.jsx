import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {auth} from '../../utils/app/auth';

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    auth.logout();
    history.push('/login');
  }

  render() {
    const { children } = this.props;

    if (auth.isAuthenticated()) {
      return (
        <>
          <h1>Header</h1>
          <button onClick={() => this.handleClick()}>Logout</button>

          {children}

          <h1>Footer</h1>
        </>
      );
    }
    return <>{children}</>;
  }
}

export default withRouter(AppContainer);
