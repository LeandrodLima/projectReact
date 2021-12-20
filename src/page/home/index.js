import React, { useState, useEffect } from 'react';
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
import CoreButton from '../../components/CoreButton';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
                 <Text style={styles.Title}>Exercício de Admissão</Text>
            <CoreButton stylo={
                {
                    backgroundColor: '#662d91',
                    width: '90%',
                    height: 45,
                    margin:30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 7
                }
            }
                navigate={'Users'}
                label={'Usuarios'}
                color={
                    { color: 'white' }
                } />
            <CoreButton stylo={
                {
                    backgroundColor: '#662d91',
                    width: '90%',
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 7
                }
            }
                navigate={'Countries'}
                label={'Países '}
                color={
                    { color: 'white' }
                } />
       
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
    Title:{
        fontSize: 32,
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
