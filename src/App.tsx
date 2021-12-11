/* eslint-disable react/jsx-props-no-spreading */

import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from "./containers/routes";
import { Provider } from "react-redux";
import store from "./store";
import Sidebar from "./containers/Sidebar";

interface Containers { }

function Containers({ }: Containers) {

  return (
    <Provider store={store}>
      <div className="app">
        <div style={{ display: 'flex' }}>
          <Suspense fallback={<p>Loading</p>}>
            <BrowserRouter>
              <Sidebar />
              <Switch>
                {ROUTES.map((route) => (
                  <Route
                    key={route.key}
                    exact={route.exact}
                    path={`${route.path}`}
                    component={(props: any) => (
                      <route.component
                        {...props}
                      />
                    )}
                  />
                ))}
              </Switch>
            </BrowserRouter>
          </Suspense>
        </div>
      </div >
    </Provider>
  );
}

export default Containers;
