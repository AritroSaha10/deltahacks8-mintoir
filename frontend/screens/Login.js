import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{ color: "white", marginBottom: 10 }}>Login Screen</Text>

            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={{ color: "white", marginBottom: 10 }}>Move to Signup Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Dashboard' }],
                });
            }}>
                <Text style={{ color: "white", marginBottom: 10 }}>Go to Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>navigation.navigate('Connect Wallet')}>
                <Text style={{ color: "white", marginBottom: 10 }}>Wallet Connection</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login