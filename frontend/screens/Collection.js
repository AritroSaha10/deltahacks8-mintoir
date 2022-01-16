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
import HomeCard from '../components/home_card.js'
import BottomNav from '../components/bottom_nav.js'
import Searchbar from '../components/searchbar'

const image = { uri: "https://i.ibb.co/Z88yrNT/Onboarding-Screen-2.png" }

const Collection = () => {
    return (
        <ImageBackground source={image} style={styles.image}>
            <ScrollView>
                <VStack space={3}>
                    <HStack justifyContent='space-between' alignItems='flex-start' paddingLeft={'15px'}>
                        <Text color="white" fontSize="32" fontFamily="Philosopher-Bold">My Memories</Text>
                    </HStack>
                    <Searchbar/>
                    <Stack alignItems='flex-start' paddingLeft="15px">
                        <VStack space={5}>
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
                        </VStack>
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

export default Collection