import React from "react";
import { PiContainer } from "./components";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <PiContainer>
      <Router>
        <Routes />
      </Router>
    </PiContainer>
  );
}

export default App;
