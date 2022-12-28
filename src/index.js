// react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// livepeer imports
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import LivePeerClient from './Livepeer';

// rainbowkit imports
import {
  lightTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

// Livepeer Config:
// const livepeerClient = createReactClient({
//   provider: studioProvider({
//     apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
//   }),
// });

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={lightTheme({
            accentColor: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}>
        <LivepeerConfig client={LivePeerClient}>
          <App/> 
        </LivepeerConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
