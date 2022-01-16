import React from 'react';
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from 'native-base';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function SearchBar() {
  return (
      <VStack width="85%" space={5} alignItems="center" paddingLeft="15px">
        <Input
          p={3}
          placeholder="Search By Anything"
          variant="filled"
          width="100%"
          bg="gray.100"
          borderRadius="10"
          placeholderTextColor="gray.500"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          _web={{
            _focus: { style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="6"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
        <SearchBar/>
    </NativeBaseProvider>
  );
}