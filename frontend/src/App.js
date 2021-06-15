import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import  user  from './reducers/user'

import ResourcesList from "components/ResourcesList";
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { Meetups } from "pages/Meetups";
import { Organizations } from "pages/Organizations";
import { Communities } from "pages/Communities";
import { Events } from "pages/Events";
import { Schools } from "pages/Schools";
import { Websites } from "pages/Websites";

const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
          <SignIn />
          </Route>

          <Route path="/signup" component={SignUp} />

          <Route path="/" exact>
          <ResourcesList />
          </Route>

          <Route path="/Meetups">
            <Meetups />
          </Route>

          <Route path="/Organizations">
            <Organizations />
          </Route>

          <Route path="/Communities">
            <Communities />
          </Route>

          <Route path="/Events">
            <Events />
          </Route>

          <Route path="/Schools">
            <Schools />
          </Route>

          <Route path="/Websites">
            <Websites />
          </Route>
        </Switch>
      </BrowserRouter>
      </Provider>
    </div>
  );
};
