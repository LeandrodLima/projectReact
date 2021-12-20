import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';
const axios = require('axios')


export async function getAPI() {
    const htmlM = 'http://www.amock.io/api/fcmaia/countries'
    let array =[]
    const response = (await  axios.get(htmlM)).data
    return response;


}