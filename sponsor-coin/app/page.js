'use client';
import "./App.css";
import Header from "./components/Header";
import Agents from "./components/Agents";
import Recipients from "./components/Recipients";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function App() {
  /* ROBIN NEW CODE NOT WORKING 
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  */

  return (
    <div className="App">
      {/* <Header connect={connect} isConnected={isConnected} address={address} />
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap isConnected={isConnected} address={address} />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/Recipients" element={<Recipients />} />
        </Routes>
      </div> */}
    </div>
  )
}

export default App;
