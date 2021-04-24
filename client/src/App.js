import React from "react";
import { PiContainer } from "./components";
import Routes from "./routes";
import Web3 from "web3";
import { BrowserRouter as Router } from "react-router-dom";
import { ContactMailTwoTone } from "@material-ui/icons";

function App() {
  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8585");
    const network = await web3.eth.net.getNetworkType();
    console.log("network", network);
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <PiContainer>
      <Router>
        <Routes />
      </Router>
    </PiContainer>
  );
}

export default App;
