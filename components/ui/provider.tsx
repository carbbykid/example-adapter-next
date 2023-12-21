"use client";

import {
  BLOCKCHAINS_DATA,
  WalletProvider,
} from "@coin98t/wallet-adapter-react";
import { WalletModalProvider } from "@coin98t/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@coin98t/wallet-adapter-phantom";
import { Coin98WalletAdapter } from "@coin98t/wallet-adapter-coin98";
import { MetaMaskWalletAdapter } from "@coin98t/wallet-adapter-metamask";

import { ExodusWalletAdapter } from "@coin98t/wallet-adapter-exodus";
import { RamperWalletAdapter } from "@coin98t/wallet-adapter-ramper";
import { SubWalletAdapter } from "@coin98t/wallet-adapter-subwallet";
import { FoxWalletAdapter } from "@coin98t/wallet-adapter-fox";

interface ContainerProps {
  children: React.ReactNode;
}

const Provider: React.FC<ContainerProps> = ({ children }) => {
  const enables = [
    BLOCKCHAINS_DATA.cosmos,
    BLOCKCHAINS_DATA.ethereum,
    BLOCKCHAINS_DATA.solana,
    BLOCKCHAINS_DATA.near,
    BLOCKCHAINS_DATA.polkadot,
  ];
  const wallets = [
    Coin98WalletAdapter,
    MetaMaskWalletAdapter,
    PhantomWalletAdapter,
    ExodusWalletAdapter,
    RamperWalletAdapter,
    SubWalletAdapter,
    FoxWalletAdapter,
  ];
  return (
    <WalletProvider wallets={wallets} enables={enables} autoConnect>
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
};

export default Provider;
