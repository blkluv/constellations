// toaster imports: 
import { Toaster } from "react-hot-toast";

// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// livepeer imports
import { LivepeerConfig } from '@livepeer/react';
import LivePeerClient from './Livepeer';

// apollo imports
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client"

// rainbowkit imports
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

// Rainbowkit Config:
const { chains, provider } = configureChains(
  [mainnet, polygon, polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_MUMBAI_API_KEY }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Constellations',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

// Apollo client: 
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/niemacodes/constellation",
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors',
  },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme({
              accentColor: 'blue',
              borderRadius: 'small',
              fontStack: 'system',
              overlayBlur: 'small',
            })}>
            <LivepeerConfig client={LivePeerClient}>
              <Toaster /> 
              <App/> 
            </LivepeerConfig>
        </RainbowKitProvider>
      </WagmiConfig>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
