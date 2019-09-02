import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {auth} from '../utils/app/auth';
import {isLoginRoute, isProtectedRoute, isRootRoute} from '../utils/app/routes';

class AppRoute extends Component {
  render() {
    const {component: ComponentToRender, ...rest} = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          const {location} = this.props;

          // authenticated
          if (auth.isAuthenticated()) {
            if (isLoginRoute(location) || isRootRoute(location)) {
              return (
                <Redirect
                  to={{pathname: '/country', state: {from: location}}}
                />
              );
            }
            return <ComponentToRender {...props} />;
          }

          // unauthenticated
          if (isProtectedRoute(location) || isRootRoute(location)) {
            return (
              <Redirect
                to={{pathname: '/login', state: {from: location}}}
              />
            );
          }
          return <ComponentToRender {...props} />;
        }}
      />
    );
  }
}

export default AppRoute;
