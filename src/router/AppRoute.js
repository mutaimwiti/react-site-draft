import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from "../utils/Auth";
import routes from './routes';

class AppRoute extends Component {
  isProtectedRoute = (props) => {
    const protectedRoutes = routes.filter(route => route.protected).map(route => route.path);

    return protectedRoutes.indexOf(props.location.pathname) > -1;
  };

  isLoginRoute = (props) => {
    const {location: {pathname}} = props;

    return pathname === '/login';
  };

  render() {
    const {component: ComponentToRender, ...rest} = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (Auth.isAuthenticated()) {
            // authenticated
            if (this.isLoginRoute(props)) {
              return <Redirect to={{pathname: '/country', state: {from: props.location}}}/>
            }
            return <ComponentToRender {...props}/>;
          } else {
            //unauthenticated
            if (this.isProtectedRoute(props)) {
              return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
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
