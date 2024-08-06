import React, {Component} from 'react';
import { 
   Text,
   StyleSheet,
   View,
   TextInput,
   TouchableOpacity,
   KeyboardAvoidingView,
   SafeAreaView,
   Alert,
   Image,
   ScrollView
} from 'react-native';
import Categories from './CategoriesScreen.js';
import AddPic from './AddProfilePic.js';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";

class profile extends Component {
    constructor(props){
        super(props);  
        this.state={
          FirstName: '',
          Month: '',
          Day: '',
          Year: '',
          Gender: 'Male' && 'Female',
          UID: null
        }
      }

    writeUser = () => {
        
        firebase
        .database()
        .ref('UserList/')
        .push({
            birthday: this.state.Month + this.state.Day + this.state.Year,
            name: this.state.FirstName,
            gender: this.state.Gender
        }
        ).then({

        }).catch({

        })
      }

    myFunc = () => {
      this.validate()
    }

    validate = ()=>{
        const {FirstName, Gender, Year, Day, Month} = this.state
        
          if (FirstName == ''){
            Alert.alert(
              'Oops...',
              'First Name is not Specified',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            this.setState({valid: false})
            return false
          }
          if (Gender == 'Male'){
           
          }
          else if (Gender !== 'Female'){
            Alert.alert(
              'Oops...',
              'Gender is Invalid',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            this.setState({valid: false})
            return false
          }
          if (Gender == 'Female'){
            
          }
          else if (Gender !== 'Male'){
            Alert.alert(
              'Oops...',
              'Gender is Invalid',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            this.setState({valid: false})
            return false
          }
          if (Gender == ''){
            Alert.alert(
              'Oops...',
              'Gender is not Specified',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            this.setState({valid: false})
            return false
          }
          if (Year == ''){
            Alert.alert(
              'Oops...',
              'Year is not Specified',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            return false
          }
          if (Day == ''){
            Alert.alert(
              'Oops...',
              'Day is not Specified',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            return false
          }
          if (Month == ''){
            Alert.alert(
              'Oops...',
              'Month is not Specified',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            return false
          }
          if (Year == '2003'){
            this.writeUser(),
            this.props.navigation.navigate('PicUpload') 
          }
          else if (Year == '2004'){
            this.writeUser(),
            this.props.navigation.navigate('PicUpload') 
          }
          else if (Year == '2005'){
            this.writeUser(),
            this.props.navigation.navigate('PicUpload') 
          }
          else if (Year == '2006'){
            this.writeUser(),
            this.props.navigation.navigate('PicUpload') 
          }
          else {
            Alert.alert(
              'Oops...',
              'You are not of the required age to use HeyFriend!',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
            this.setState({valid: false})
            return false
          }
          this.setState({UID: firebase.auth().currentUser.uid})
          this.writeUser(),
          this.props.navigation.navigate('PicUpload') 
          return true
    }

    render() {
       return(

        <ScrollView>
         
           <View style={{ flex: 1,
               backgroundColor: '#fff',
               paddingLeft: 15,
               paddingRight: 15
               }}>

<KeyboardAvoidingView>
              
              <Image
              style={{
              alignSelf: 'center',
              width: "110%",
              height: '75%',
              bottom: 85,
              }}
              source={require('./Describe.png')}
              />

               <Text style={styles.header}>
                   Let's Get to Know You
               </Text>
               <TextInput 
                style={styles.textInput}
                placeholderTextColor = "#555555"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={(value)=> this.setState({FirstName: value})}/>
               <TextInput
                style={styles.textInput2}
                placeholderTextColor = "#555555"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={(value)=> this.setState({Gender: value})}
               />
              <TextInput
                style={styles.textInput3}
                placeholder = "Month/"
                placeholderTextColor = "#808080"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={(value)=> this.setState({Month: value})}
               />
               <TextInput
                style={styles.textInput4}
                placeholder = "Day/"
                placeholderTextColor = "#808080"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={(value)=> this.setState({Day: value})}
               />
               <TextInput
                style={styles.textInput5}
                placeholder = "Year"
                placeholderTextColor = "#808080"
                underlineColorAndroid="transparent"
                autoCorrect={false}
                onChangeText={(value)=> this.setState({Year: value})}
               />
               <TouchableOpacity style={styles.button}
               onPress={() => this.myFunc()}>
                   <Text style={styles.btntext}>Next</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => this.myFunc()}>
                  <Ionicons name='ios-arrow-forward' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 1625, left: 157.5}}/>
               </TouchableOpacity>
               
               <Text style={{color: "white"}}>
                 sifhsuifhaskfasdgsaufgdfs
                 afsdfgawgrghqerhethethteo
               </Text>
               <Text style={{color: "white"}}>
                 sifhsuifhaskfasdgsaufgdfs
                 afsdfgawgrghqerhethethteo
               </Text>
               <Text style={{color: "white"}}>
                 sifhsuifhaskfasdgsaufgdfs
                 afsdfgawgrghqerhethethteo
               </Text>
               <Text style={{color: "white"}}>
                 sifhsuifhaskfasdgsaufgdfs
                 afsdfgawgrghqerhethethteo
               </Text>

               </KeyboardAvoidingView>
              </View>
              </ScrollView>
              
       )
    }
   }

   

const Navigator = createStackNavigator({
  Home3: {
    screen: profile,
    navigationOptions: {
      header: null
    }
  },
  CategoriesScreen: {
    screen: Categories,
    navigationOptions: {
      headerTitle: 'Interests/Hobbies',
    }
  },
  PicUpload: {
    screen: AddPic,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
});

const styles = StyleSheet.create({
    header: {
       bottom: -100,
       textAlign: 'center',
       fontWeight: 'bold',
       fontSize: 30,
       color: '#000000',
       justifyContent: 'center',
       paddingBottom: 10,
       marginBottom: 40,
       borderBottomColor: '#199187',
       borderBottomWidth: 4,
    },   
    button: {
       bottom: 1580,
       left: 125,
       alignSelf: 'stretch',
       alignItems: 'center',
       padding: 20,
       marginTop: 30,
    },
    btntext: {
      color: '#fff',
      fontSize: 17.5,
    },
    btntext1: {
       color: '#fff',
       fontSize: 17.5
    },
    subheading: {
       fontWeight: 'bold',
       fontSize: 15
    },
    textInput: {
        bottom: 865,
        textAlign: 'center',
        alignItems: 'stretch',
        height: 60,
        marginBottom: 30,
        color: '#000000',
        backgroundColor: '#fff',
        borderRadius: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: '#dcdcdc',
        borderRightWidth: 3,
        borderRightColor: '#dcdcdc',
        borderTopColor: '#dcdcdc',
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 3
    },
    textInput2: {
        bottom: 860,
        textAlign: 'center',
        alignItems: 'stretch',
        height: 60,
        marginBottom: 30,
        color: '#000000',
        backgroundColor: '#fff',
        borderRadius: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: '#dcdcdc',
        borderRightWidth: 3,
        borderRightColor: '#dcdcdc',
        borderTopColor: '#dcdcdc',
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 3
    },
    textInput3: {
        bottom: 852.5,
        textAlign: 'center',
        width: 100,
        height: 60,
        marginBottom: 30,
        color: '#000000',
        backgroundColor: '#fff',
        borderRadius: 3,
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderLeftColor: '#dcdcdc',
        borderRightWidth: 3,
        borderRightColor: '#dcdcdc',
        borderTopColor: '#dcdcdc',
        borderBottomColor: '#dcdcdc',
        borderBottomWidth: 3
    },
    textInput4: {
      bottom: 942.5,
      alignSelf: "center",
      textAlign: 'center',
      width: 100,
      height: 60,
      marginBottom: 30,
      color: '#000000',
      backgroundColor: '#fff',
      borderRadius: 3,
      borderTopWidth: 3,
      borderLeftWidth: 3,
      borderLeftColor: '#dcdcdc',
      borderRightWidth: 3,
      borderRightColor: '#dcdcdc',
      borderTopColor: '#dcdcdc',
      borderBottomColor: '#dcdcdc',
      borderBottomWidth: 3
  },
  textInput5: {
    bottom: 1032.5,
    alignSelf: "flex-end",
    textAlign: 'center',
    width: 100,
    height: 60,
    marginBottom: 30,
    color: '#000000',
    backgroundColor: '#fff',
    borderRadius: 3,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderLeftColor: '#dcdcdc',
    borderRightWidth: 3,
    borderRightColor: '#dcdcdc',
    borderTopColor: '#dcdcdc',
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 3
},
})

export default createAppContainer(Navigator);