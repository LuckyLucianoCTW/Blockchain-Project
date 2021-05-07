import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Web3 from "web3";
import { PiContainer } from "./components";
import Routes from "./routes";
import { useAuth, useContract } from "./store";
import Products from "./abis/Products.json";
import {
  QueryClient,
  QueryClientProvider,
  // ReactQueryDevtools,
} from "react-query";

const queryClient = new QueryClient();

function App() {
  const { setProfile } = useAuth();
  const { setContract } = useContract();

  const loadWeb3 = async () => {
    const ethereum = window.ethereum;

    if (ethereum) {
      window.web3 = new Web3(ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "This is a Non-Ethereum browser, you should consider trying MetaMask"
      );
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setProfile(accounts[0]);

    const netId = await web3.eth.net.getId();
    const networkData = Products.networks[netId];

    if (networkData) {
      const products = new web3.eth.Contract(Products.abi, networkData.address);
      setContract(products);
    } else {
      window.alert("Products contract was not deployed on detected network");
    }
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PiContainer>
        <Router>
          <Routes />
        </Router>
      </PiContainer>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  );
}

export default App;
