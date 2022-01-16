import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  IconButton,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
  Fab,
} from 'native-base';
import { View, StyleSheet} from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [selected, setSelected] = React.useState(0);
  return (
      <View style={style.container}>
           <NativeBaseProvider>
            <Box margin="20px" bg='rgba(45, 47, 65, 0.9)' p={2.5} rounded="30px">
                <HStack alignItems="center" shadow={6} >
                <Pressable
                    opacity={selected === 0 ? 1 : 0.5}
                    py="3"
                    flex={1}
                    onPress={() => setSelected(0)}>
                    <Center>
                    <Icon
                        mb="1"
                        as={
                        <MaterialCommunityIcons
                            name={selected === 0 ? 'home' : 'home-outline'}
                        />
                        }
                        color="white"
                        size="sm"
                    />
                    </Center>
                </Pressable>
                <Pressable
                    opacity={selected === 1 ? 1 : 0.5}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(1)}
                >
                    <Center>
                    <Icon
                        mb="1"
                        as={<MaterialIcons name="list" />}
                        color="white"
                        size="sm"
                    />
                    </Center>
                </Pressable>
                <IconButton bg="black" borderRadius="full" icon={<Icon as={MaterialIcons} name="add" />}  _icon={{
        color: "white",
        size: "lg",
      }}/>
                <Pressable
                    opacity={selected === 2 ? 1 : 0.6}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(2)}
                >
                    <Center>
                    <Icon
                        mb="1"
                        as={
                        <MaterialIcons
                            name='search'
                        />
                        }
                        color="white"
                        size="sm"
                    />
                    </Center>
                </Pressable>
                <Pressable
                    opacity={selected === 3 ? 1 : 0.5}
                    py="2"
                    flex={1}
                    onPress={() => setSelected(3)}
                >
                    <Center>
                    <Icon
                        mb="1"
                        as={
                        <MaterialCommunityIcons
                            name={selected === 3 ? 'account' : 'account-outline'}
                        />
                        }
                        color="white"
                        size="sm"
                    />
                    </Center>
                </Pressable>
                </HStack>
                </Box>
           </NativeBaseProvider>
      </View>
      
  );
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        backgroundColor: 'rgba(52, 52, 52, 0)',
    }
});