import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import  user  from './reducers/user'
import resources from "reducers/resources";

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Main from './components/Main'
import Welcome from './components/Welcome'

import ResourcesList from "components/ResourcesList";
import { Meetups } from "pages/Meetups";
import { Organizations } from "pages/Organizations";
import { Communities } from "pages/Communities";
import { Events } from "pages/Events";
import { Schools } from "pages/Schools";
import { Websites } from "pages/Websites";


const reducer = combineReducers({
   user: user.reducer,
  resources: resources.reducer
 })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/main" component={Main} />
            <Route path="/signup" component={SignUp} />
            <Route path="/welcome" component={Welcome} />

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
        </Provider>
      </BrowserRouter>
    </div>
  );
};
