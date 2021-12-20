import React from 'react';
import {View, Text, Image, StyleSheet,  TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CoreButton(props) {
    const { navigate, label, stylo, color,url} = props
    const navigation = useNavigation();
    
    return(
        <TouchableOpacity style={
            stylo
        }
        onPress={
            () => navigation.navigate(navigate ,{ url:url})
        }>
            <Text style={
                    color
            }>               
           {label}
            </Text>
        </TouchableOpacity>
    )
}
export default CoreButton