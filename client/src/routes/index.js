import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useAuth } from "../store";
import Default from "./Default";
import Owner from "./Owner";

export default function index() {
  // const history = useHistory();
  const { role } = useAuth();
  const [routes, setRoutes] = useState(Default);

  useEffect(() => {
    switch (role) {
      case "owner":
        setRoutes(Owner);
        break;
      case "default":
        setRoutes(Default);
        break;
    }
  }, []);

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
