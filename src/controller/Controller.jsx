import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';
const axios = require('axios')


export async function getAPICT() {
    const htmlM = 'http://www.amock.io/api/fcmaia/countries'
    let array =[]
    const response = (await  axios.get(htmlM)).data
    return response;


}


export async function getAPIUser() {
    const htmlM = 'https://reqres.in/api/users'
    let array =[]
    const response = (await  axios.get(htmlM)).data
    return response;


}