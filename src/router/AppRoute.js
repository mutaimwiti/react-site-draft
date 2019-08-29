import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from "../utils/Auth";
import routes from './routes';

class AppRoute extends Component {
  isProtectedRoute = (location) => {
    const {pathname} = location;

    const protectedRoutes = routes.filter(route => route.protected).map(route => route.path);

    return protectedRoutes.indexOf(pathname) > -1;
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

          if (Auth.isAuthenticated()) {
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
