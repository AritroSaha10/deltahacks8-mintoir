import React, { useState, useEffect } from 'react'
import { SafeAreaView, ImageBackground, View, StyleSheet, ScrollView } from 'react-native'
import {
    Icon,
    IconButton,
    NativeBaseProvider,
    Box,
    Text,
    HStack,
    Heading,
    Center,
    VStack,
    Stack,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from '../components/app_bar.js'
import HomeCard from '../components/home_card.js'
import BottomNav from '../components/bottom_nav.js'
import Action from '../components/floating_action'
import { useNavigation } from '@react-navigation/native'
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { getCurrentEthBal } from '../util/mintNFT.js';
import { Pressable } from 'react-native';

const image = { uri: "https://i.ibb.co/Z88yrNT/Onboarding-Screen-2.png" }

const Dashboard = () => {
    //const [data, setData] = useState([]);

    //useEffect(() => {
         //make call here
        //setData([0, 1, 2, 3, 4])
    //});
    const navigation = useNavigation();
    const connector = useWalletConnect();
    
    return (
        <ImageBackground source={image} style={styles.image}>
            <ScrollView>
                <AppBar />
                <VStack space={3} paddingTop={'20px'} paddingBottom="80px">
                    <HStack justifyContent='space-between' alignItems='center' paddingLeft={'15px'}>
                        <Text color="white" fontSize="40" fontFamily="Philosopher-Bold">Trending</Text>
                        <IconButton onPress={() =>navigation.navigate('Trending')} paddingRight={'15px'} icon={<Icon size="md" as={<MaterialIcons name='chevron-right' />} color="white" />} />
                    </HStack>
                    <Pressable>
                        <Text>imposter?!</Text>
                    </Pressable>
                    <Stack paddingLeft={'15px'} alignItems='center'>
                        <ScrollView horizontal={true}>
                            <HStack space={5}>
                                <HomeCard 
                                    imageUri = {{uri: "https://i.ibb.co/drCpCRP/Hawaii-2-e1642281817102.jpg"}}
                                    title="Trip to hawaii"
                                    id="0x9asd5s234c...403D261"
                                    likes="980"
                                />
                                <HomeCard 
                                    imageUri = {{uri: "https://i.ibb.co/BchGdzx/download.jpg"}}
                                    title="The Kremlin"
                                    id="0x9afg659c...40asB22261"
                                    likes="323"
                                />
                                <HomeCard 
                                    imageUri = {{uri: "https://i.ibb.co/RTBnr48/output-2022-01-13-21-12-56.png"}}
                                    title="Cancun Beaches"
                                    id="0x9144asd9c...403afB22261"
                                    likes="300"
                                />
                            </HStack>
                        </ScrollView>
                    </Stack>
                    <HStack justifyContent='space-between' alignItems='center' paddingLeft={'15px'}>
                        <Text color="white" fontSize="40" fontFamily="Philosopher-Bold">My Collection</Text>
                        <IconButton onPress={() =>navigation.navigate('Collection')} paddingRight={'15px'} icon={<Icon size="md" as={<MaterialIcons name='chevron-right' />} color="white" />} />
                    </HStack>
                    <Stack paddingLeft={'15px'} alignItems='center'>
                        <ScrollView horizontal={true}>
                            <HStack space={5}>
                                <HomeCard 
                                    imageUri = {{uri: "https://i.ibb.co/wMPJJF1/9f62f4039ba8ba65a45c1692c6a73b42.jpg"}}
                                    title="Las Vegas Adventure"
                                    id="0x9144f659c...403D8fB22261"
                                    likes="2"
                                />
                                <HomeCard 
                                    imageUri = {{uri: "https://i.ibb.co/4J3q70j/images-8.jpg"}}
                                    title="Merry Christmas James!"
                                    id="0x914asd59c...20asd8fB22"
                                    likes="5"
                                />
                                <HomeCard 
                                    imageUri = {{uri: "https://i.ibb.co/GntR79g/unknown.png"}}
                                    title="John's Postcard"
                                    id="0x92dsa65am...w3sada2261"
                                    likes="1"
                                />
                            </HStack>
                        </ScrollView>
                        <Box p={15}></Box>
                    </Stack>
                </VStack>
            </ScrollView>
            <BottomNav />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
    },
});

export default Dashboard