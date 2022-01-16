import React from 'react'
import { ImageBackground, View, Text, StyleSheet, AppRegistry, TouchableOpacity, Alert, SafeAreaView, StatusBar} from 'react-native';
import { NativeBaseProvider, Button, Icon, Center, Image, AspectRatio, Heading, HStack, Stack, Box } from 'native-base';


const image = {uri: "https://i.ibb.co/L6sBBJ0/Onboarding-Screen-2.png"}
const onPress = () => {};

const Onboarding = () => {
    return (
        
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <ImageBackground source = {image} resizeMode='cover' style={styles.image}>
                <Button position={'absolute'} bottom={10} p={5} leftIcon={<Icon name="cog-outline" type="Ionicons" />}>
                    Get Started
                </Button>
                <Box maxW={80} rounded={'lg'} overflow={'hidden'} borderWidth={1} />
            </ImageBackground> 
        </View>
        
    )
} 

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
    },
});

export default Onboarding;