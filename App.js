
import { 
   StyleSheet,
   View,
   TouchableOpacity,
   Text
} 
from 'react-native';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignUp from './SignUp.js';
import LoginScreen from './LoginScreen.js';
import TermsService from './TermsService.js';
import PrivacyScreen from './Privacy.js';
import * as firebase from "firebase";
import HomeScreen from './HomeScreen.js';
import App2 from './App2.js';
import Loader2 from './Loader2.js';

var firebaseConfig = {
  apiKey: "AIzaSyA3YW5C1YYhlSPIfkogAKPfWOOqFveJpxg",
  authDomain: "heyfriend-1ed16.firebaseapp.com",
  databaseURL: "https://heyfriend-1ed16.firebaseio.com",
  projectId: "heyfriend-1ed16",
  storageBucket: "heyfriend-1ed16.appspot.com",
  messagingSenderId: "530693930418",
  appId: "1:530693930418:web:0431d19644eeb3da1478ab",
  measurementId: "G-MJD32HT3VW"
};

firebase.initializeApp(firebaseConfig);


const Navigator = createStackNavigator({
  Home2: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
     
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
        header: null,
        gesturesEnabled: false
    },
  },
  Sign: {
    screen : SignUp,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Terms: {
    screen : TermsService,
    navigationOptions: {
      headerTintColor: '#000000',
      gesturesEnabled: false,
    },
  },
  Privacy: {
    screen: PrivacyScreen,
    navigationOptions: {
      headerTintColor: '#000000',
      gesturesEnabled: false,
    },
  },
  App2Screen: {
    screen: App2,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
},
{
  initialRouteName: 'Home2'
}
);

const styles = StyleSheet.create({
  subheader: {
    fontSize: 22,
    color: '#fff',
    bottom: 210,
    alignSelf: 'center',
    fontWeight: 'bold'

  },
  header: {
    alignSelf: 'center',
    bottom: 100,
    fontSize: 40,
    color: '#fff',
    justifyContent: 'center',
    paddingBottom: 10,
    marginBottom: 40,
  },
  Privacytxt: {
    alignSelf: 'center',
    left: 40,
    bottom: -42.5
  },
  TermsSRVtxt: {
    alignSelf: 'center',
    bottom: -110,
    left: 95,
  },
  TermsandPrivacybtn: {
    fontWeight: 'bold',
    fontSize: 12.5,
    textDecorationLine: 'underline'
  },
  button1: {
    width: 302.5,
    height: 74,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 155,
    alignSelf: 'center',
    padding: 20,
    borderColor: '#fff',
    borderWidth: 2.5,
    backgroundColor: '#499DF5',
    borderRadius: 60
  },
  button2: {
    width: 297.5,
    height: 70,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 57.5,
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#0276FD',
    borderRadius: 60
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 21,
    fontFamily: 'Arial',
    bottom: -3
    
  },
  btntext1: {
    bottom: -7.5,
    color: '#fff',
    fontSize: 17.5,
  },
  back: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f74c05',
    paddingLeft: 60,
    paddingRight: 60
  },
  button: {
    height: 82,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3399ff',
    marginTop: 30,
    borderRadius: 60,
    borderColor: '#fff',
    borderWidth: 2
  },
});

export default createAppContainer(Navigator);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     





 



