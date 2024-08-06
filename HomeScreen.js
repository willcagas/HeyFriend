import React, { Component }from 'react';
import { 
   View,
   Text,
   TouchableOpacity, 
   StyleSheet,
   Image
} 
from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class HomeScreen extends Component {
    render() {
      return (
         <View style={{ flex: 1,
           justifyContent:'space-evenly',
           backgroundColor: '#00affc',
           paddingLeft: 30,
           paddingRight: 30}}>
  
        <Image
          style={{
            alignSelf: 'center',
            width: 200,
            height: 200,
            bottom: 50
          }}
          source={require('./Molecule.png')}
        />
  
        <Image
          style={{
            alignSelf: 'center',
            width: 340,
            height: 75,
            bottom: 125
          }}
          source={require('./1-Index.png')}
        />
  
        <Text style={styles.subheader}>Find a Friend. Be a Friend.</Text>
  
          <TouchableOpacity style={styles.button1}
            onPress={() => this.props.navigation.navigate('Sign')}>
              <Text style={styles.btntext}>Sign up</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button2}
            onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.btntext}>Login</Text>
          </TouchableOpacity>
  
         </View>
      );
    }
  }

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
    back: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f74c05',
      paddingLeft: 60,
      paddingRight: 60
    },
  });