import React, { useState, useEffect } from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/core";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

import { getCurrentEthBal } from "../util/mintNFT";

const AppBar = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#101031" />
      <HStack bg='#101031' px="1" py="3" justifyContent='space-between' alignItems='center'>
        <HStack space="4" alignItems='center'>
          <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
          <Text color="white" fontSize="20" fontFamily="Philosopher-Bold">Logo</Text>
        </HStack>
        <HStack space="2" alignItems="center">
          <IconButton icon={<Icon as={<MaterialIcons name='account-balance-wallet' />} size='sm' color="white" />} />
          <Text color="white" fontSize="18" fontFamily="Philosopher-Normal">0.9 ETH</Text>
          <IconButton icon={<Icon as={<MaterialIcons name='notifications' />} size='sm' color="white" />} />
        </HStack>
      </HStack>

    </>
  )
}

export default AppBar;