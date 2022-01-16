/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import './global';

const { registerRootComponent, scheme } = require('expo');
const { default: App } = require('./App');

const { default: AsyncStorage } = require('@react-native-async-storage/async-storage');
const { withWalletConnect, QrcodeModal } = require('@walletconnect/react-native-dapp');

const { Platform, LogBox } = require("react-native");

if (Platform.OS !== "web") {
  require("react-native-get-random-values");
  LogBox.ignoreLogs([
    "Warning: The provided value 'ms-stream' is not a valid 'responseType'.",
    "Warning: The provided value 'moz-chunked-arraybuffer' is not a valid 'responseType'.",
  ]);
}

if (typeof Buffer === "undefined") {
  global.Buffer = require("buffer").Buffer;
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
/*
registerRootComponent(withWalletConnect(App, {
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
}));
*/


registerRootComponent(App);
