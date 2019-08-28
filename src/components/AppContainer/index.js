import React, {Component} from 'react';
import Auth from "../../utils/Auth";
import {withRouter} from 'react-router';

export class AppContainer extends Component {
  handleClick = () => {
    const {history} = this.props;

    Auth.logout(() => {
      history.push('/login');
    })
  };

  render() {
    const {children} = this.props;

    if (Auth.isAuthenticated()) {
      return (
        <>
          <h1>Header</h1>
          <button onClick={() => this.handleClick()}>Logout</button>

          {children}

          <h1>Footer</h1>
        </>
      )
    } else {
      return <>{children}</>
    }
  }
}

export default withRouter(AppContainer);
