import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import ResourcesList from "components/ResourcesList";



export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <ResourcesList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
