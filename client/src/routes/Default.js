import { Route } from "react-router-dom";
import { BrowserRoutes } from "../constants";
import { Home, Products } from "../views";

export default function Default() {
  return [
    <Route
      exact
      path={BrowserRoutes.Default.Home}
      component={Home}
      key={BrowserRoutes.Default.Home}
    />,
    <Route
      exact
      path={BrowserRoutes.Default.Products}
      component={Products}
      key={BrowserRoutes.Default.Products}
    />,
  ];
}
