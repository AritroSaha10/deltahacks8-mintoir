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

const Trending = () => {
    return (
        <ImageBackground source={image} style={styles.image}>
            <ScrollView>
                <VStack space={3}>
                    <HStack justifyContent='space-between' alignItems='flex-start' paddingLeft={'15px'}>
                        <Text color="white" fontSize="32" fontFamily="Philosopher-Bold">Trending Memories</Text>
                    </HStack>
                    <Searchbar/>
                    <Stack alignItems='flex-start' paddingLeft="15px">
                        <VStack space={5}>
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

export default Trending