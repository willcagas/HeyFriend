import React, {Component} from 'react';
import { 
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";
import App2 from './App2.js';
import Categories from './CategoriesScreen.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class app extends Component {
    constructor(props){
        super(props);
        this.state = {
           matchmake: 0
        }
      }
    
    valueFunc = () => {
        this.writeUserInterest();
        this.props.navigation.navigate('CategoriesScreen')
    }

    valueFunc2 = () => {
        this.writeUserInterest2();
        this.props.navigation.navigate('CategoriesScreen')
    }

    valueFunc3 = () => {
        this.writeUserInterest3();
        this.props.navigation.navigate('CategoriesScreen')
    }

    valueFunc4 = () => {
        this.writeUserInterest4();
        this.props.navigation.navigate('CategoriesScreen')
    }

    valueFunc5 = () => {
        this.writeUserInterest5();
        this.props.navigation.navigate('CategoriesScreen')
    }

    writeUserInterest = () =>{
        firebase.database().ref('UserList/Interests/').push(
            'Study with a Buddy'
      ).then((data)=>{
            //success callback
            console.log('data ' , data)
      }).catch((error)=>{
            //error callback
            console.log('error ' , error)
      })
    }

    writeUserInterest2 = () =>{
        firebase.database().ref('UserList/Interests/').push(
            'Lunch Together'
      ).then((data)=>{
            //success callback
            console.log('data ' , data)
      }).catch((error)=>{
            //error callback
            console.log('error ' , error)
      })
    }

    writeUserInterest3 = () =>{
        firebase.database().ref('UserList/Interests/').push(
            'Hangout'
      ).then((data)=>{
            //success callback
            console.log('data ' , data)
      }).catch((error)=>{
            //error callback
            console.log('error ' , error)
      })
    }

    writeUserInterest4 = () =>{
        firebase.database().ref('UserList/Interests/').push(
            'Join a Club'
      ).then((data)=>{
            //success callback
            console.log('data ' , data)
      }).catch((error)=>{
            //error callback
            console.log('error ' , error)
      })
    }

    writeUserInterest5 = () =>{
        firebase.database().ref('UserList/Interests/').push(
            'Volunteer'
      ).then((data)=>{
            //success callback
            console.log('data ' , data)
      }).catch((error)=>{
            //error callback
            console.log('error ' , error)
      })
    }
    
     render() {
        return(
            <View style={styles.back}>

            <Image
                style={{
                alignSelf: 'center',
                width: "119%",
                height: '180%',
                bottom: 60
                }}
                source={require('./8.png')}
                />

                <TouchableOpacity style={{alignSelf: 'center', left: 21, bottom: 515 }} onPress={()=> this.valueFunc()}>
                    <Text style={{fontSize: 22, color: '#fff'}}>Study with  a Buddy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', left: 4, bottom: 450}} onPress={()=> this.valueFunc2()}>
                    <Text style={{fontSize: 22, color: '#fff'}}>Lunch Together</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', left: -27.5, bottom: 382.5}} onPress={()=>  this.props.navigation.navigate('CategoriesScreen')}>
                    <Text style={{fontSize: 22, color: '#fff'}}>Hangout</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: 'center', left: 17.5, bottom: 325}} onPress={()=>  this.props.navigation.navigate('CategoriesScreen')}>
                    <Text style={{fontSize: 22, color: '#fff'}}>Join a School Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf: 'center', left: -22, bottom: 260}} onPress={()=>  this.props.navigation.navigate('CategoriesScreen')}>
                    <Text style={{fontSize: 22, color: '#fff'}}>Volunteer</Text>
                </TouchableOpacity>

                <Ionicons name='ios-school' style={{bottom: 382.5, alignSelf: "center", left: 25,  alignSelf: 'flex-start'}} size={40} color={'#fff'}/>
                <Ionicons name='ios-hand' style={{bottom: 340, left: 32.5,  alignSelf: 'flex-start'}} size={40} color={'#fff'}/>
        </View>
        )
     }
    }
const Navigator = createStackNavigator({
    Home2: {
        screen: app,
        navigationOptions: {
            header: null
        }
        },
    CategoriesScreen: {
        screen: Categories,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        }
        },
    App2Screen: {
        screen: App2,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
        }
        },
      },
      {
        initialRouteName: 'Home2'
      }
      );
const styles = StyleSheet.create({
    back: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#40e0d0',
        paddingTop: 200,
        paddingLeft: 30,
        paddingRight: 30
    },
    header: {
        borderBottomWidth: 50,
        backgroundColor: '#fff',
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default createAppContainer(Navigator);