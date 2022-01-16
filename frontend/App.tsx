import WalletConnectProvider from '@walletconnect/react-native-dapp';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { useEffect } from 'react';
import { Providers } from './Providers';

import { useFonts } from 'expo-font';
import { NativeBaseProvider, extendTheme } from 'native-base';

const { LogBox } = require("react-native");


export default function App() {
  LogBox.ignoreAllLogs();

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    'Philosopher-Bold': require('./assets/fonts/Philosopher-Bold.ttf'),
    'Philosopher-Normal': require('./assets/fonts/Philosopher-Regular.ttf'),
  });

  const theme = extendTheme({
    fontConfig: {
      Philosopher: {
        100: {
          normal: 'Philosopher-Normal',
        },
        200: {
          normal: 'Philosopher-Bold',
        },
      }
    },
    fonts: {
      heading: 'Philosopher',
      body: 'Philosopher',
      mono: 'Philosopher',
    },
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
        <Providers>
          <Navigation colorScheme="dark" />
        </Providers>
        <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}
