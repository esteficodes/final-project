import React,{ useState, useRef } from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom";
 
import { useOnClickOutside } from './hooks';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

import  user  from './reducers/user';
import resources from "reducers/resources";

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Welcome from './components/Welcome';

import About from './pages/About';
import ForFree from './pages/ForFree';
import Contact from './pages/Contact'

import ResourcesList from "components/ResourcesList";
import { Meetups } from "pages/Meetups";
import { Organizations } from "pages/Organizations";
import { Communities } from "pages/Communities";
import { Events } from "pages/Events";
import { Schools } from "pages/Schools";
import { Websites } from "pages/Websites";
import NewResourceForm from "components/NewResourceForm";


const reducer = combineReducers({
   user: user.reducer,
   resources: resources.reducer
 })
const store = configureStore({ reducer })

export const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
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

            <Route path="/" exact>
            <ResourcesList />
            </Route>

          <Route path="/Meetups">
            <Meetups />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/ForFree">
            <ForFree />
          </Route>

          <Route path="/Contact">
            <Contact />
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
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

