import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { BrowserRoutes } from "../constants";
import { useAuth } from "../store";
import Default from "./Default";
import Owner from "./Owner";

export default function index() {
  const history = useHistory();
  const { isAdmin, isAuth } = useAuth();
  const [routes, setRoutes] = useState(Default);

  useEffect(() => {
    console.log(isAuth);
    if (!isAuth) {
      setRoutes(Default);
      history.push(BrowserRoutes.Default.Home);
    } else if (isAdmin) {
      setRoutes(Owner);
    } else {
      setRoutes(Default);
    }
  }, [isAdmin]);

  return (
    <Switch>
      {routes}
      <Route component={NotFoundRoute} />
    </Switch>
  );
}

const NotFoundRoute = () => {
  return (
    <Box width="100%" height="100%">
      <Typography>Page not found!</Typography>
    </Box>
  );
};
