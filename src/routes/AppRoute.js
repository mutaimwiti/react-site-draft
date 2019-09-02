import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {auth} from '../utils/app/auth';
import routes from './routes';

class AppRoute extends Component {
  protectedRoutes = routes.filter(route => route.protected).map(route => route.path);

  isProtectedRoute = (location) => {
    const {pathname} = location;

    return this.protectedRoutes.indexOf(pathname) > -1;
  };

  isLoginRoute = (location) => {
    const {pathname} = location;

    return pathname === '/login';
  };

  render() {
    const {component: ComponentToRender, ...rest} = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          const {location} = this.props;

          if (auth.isAuthenticated()) {
            // authenticated
            if (this.isLoginRoute(location)) {
              return <Redirect to={{pathname: '/country', state: {from: location}}}/>
            }
            return <ComponentToRender {...props}/>;
          } else {
            //unauthenticated
            if (this.isProtectedRoute(location)) {
              return <Redirect to={{pathname: '/login', state: {from: location}}}/>
            } else {
              return <ComponentToRender {...props}/>;
            }
          }
        }}
      />
    );
  }
}

export default AppRoute;
