import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Box from "./pages/Box";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/*permite que uma rota seja chamada por momento*/}
      <Route path="/" exact component={Main} />
      <Route path="/box/:id" component={Box} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
