import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ResourcesList from "components/ResourcesList";
import { Meetups } from "pages/Meetups";
import { Organizations } from "pages/Organizations";
import { Communities } from "pages/Communities";
import { Events } from "pages/Events";
import { Schools } from "pages/Schools";
import { Websites } from "pages/Websites";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
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
    </div>
  );
};
