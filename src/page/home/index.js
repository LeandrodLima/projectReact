import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    Image,
    StyleSheet,
    Animated,
    Keyboard,
    ImageBackground
} from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 0
    },
    imageCont: {
        paddingTop: 10,
        flex: 2,
        width: '100%',
        paddingBottom: 50
    },
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // marginBottom: 20
    }
})
