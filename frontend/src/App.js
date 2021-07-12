import React, { useState, useRef } from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useOnClickOutside } from "./hooks";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";

import user from "./reducers/user";
import resources from "reducers/resources";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Welcome from "./components/Welcome";

import About from "./pages/About";
import ForFree from "./pages/ForFree";
import Contact from "./pages/Contact";

import { Meetups } from "pages/Meetups";
import { Organizations } from "pages/Organizations";
import { Communities } from "pages/Communities";
import { Events } from "pages/Events";
import { Schools } from "pages/Schools";
import NewResourceForm from "components/NewResourceForm";
import { Details } from "pages/Details";
import { Websites } from "pages/Websites";

const reducer = combineReducers({
  user: user.reducer,
  resources: resources.reducer,
});
const store = configureStore({ reducer });

export const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/main" component={Main} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/newresource" component={NewResourceForm} />

            <Route path="/meetups">
              <Meetups />
            </Route>

            <Route path="/resources/id/:_id">
              <Details />
            </Route>
            <Route path="/home">
              <Main />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/forFree">
              <ForFree />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/organizations">
              <Organizations />
            </Route>

            <Route path="/communities">
              <Communities />
            </Route>

            <Route path="/events">
              <Events />
            </Route>

            <Route path="/schools">
              <Schools />
            </Route>

            <Route path="/websites">
              <Websites />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
          </Switch>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
