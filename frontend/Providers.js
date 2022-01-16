import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectProvider from "@walletconnect/react-native-dapp";

import { expo } from "./app.json";
const { scheme } = expo;

const walletConnectOptions = {
    bridge: "https://bridge.walletconnect.org",
    clientMeta: {
        description: "Connect with WalletConnect",
        url: "https://walletconnect.org",
        icons: ['https://walletconnect.org/walletconnect-logo.png'],
        name: "WalletConnect"
    },
    redirectUrl: Platform.OS === 'web' ? window.location.origin : `${scheme}://`,
    storageOptions: {
        asyncStorage: AsyncStorage,
    },
}

export const Providers = ({ children }) => (
    <WalletConnectProvider {...walletConnectOptions}>
        {children}
    </WalletConnectProvider>
)

