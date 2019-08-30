import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import './App.css';
import {routes, AppRoute} from "../../routes";
import AppContainer from "../AppContainer";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContainer {...props}>
          <Switch>
            {
              routes.map(({exact, path, component}) => {
                return (
                  <AppRoute
                    exact={exact}
                    path={path}
                    key={path}
                    component={component}
                  />
                )
              })
            }
          </Switch>
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
