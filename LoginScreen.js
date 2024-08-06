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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App2 from './App2.js'
import * as firebase from "firebase";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from './Loader.js';


class loginscreen extends Component {
  constructor(props){
    super(props);
    this.state={
      password: '',
      email: '',
      state: { hidden: true },
      errorMessage: null,
      loading: false
    }
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then()
        .catch(function(error){
          if (firebase.auth().currentUser) {
           
          } 
          else {
            Alert.alert(
              errorMessage = error.message)
          }});
    this.checkUser()
  };

  checkUser = () => {
    if (firebase.auth().currentUser) {
      this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
      this.props.navigation.navigate('App2Screen')}
      , 1000)
    } 
    else {

    };
  }

  validate = ()=>{
    const {email, password} = this.state
      if (email == ''){
        Alert.alert(
          'Oops...',
          'Email is Invalid',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        return false
      }
      if (password == ''){
        Alert.alert(
          'Oops...',
          'Password is Invalid',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        return false
      }
      else if (email !== '', password != ''){
        this.handleLogin()
      }
      return true
  }

  onInputLabelPressed = () => {
    this.setState({ hidden:!this.state.hidden });
  };

  render() {
    return (
    <View style={styles.back}>

      <View style={{height: 70, backgroundColor: '#0095d6', width: 410, left: -30}}>
        <TouchableOpacity style={styles.button10}
               onPress={() => this.props.navigation.pop()}>
                   <Text style={styles.btntext1}>Back</Text>
               </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{borderColor: 'red', borderWidth: 2, bottom: 40, width: 20, left: 7.5}}>
          <Ionicons name='ios-arrow-back' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 40, left: 35}}/>
        </TouchableOpacity>
      </View>

      <ScrollView >
     

      <Image
      style={{
        width: 375,
        height: 900,
        bottom: 150,
        alignSelf: 'center'
      }}
      source={require('./3-LogIn.png')}
    />
    
        <TextInput style={styles.textInput1} 
         placeholderTextColor = "#555555"
         underlineColorAndroid="transparent"
         autoCapitalize='none'
         autoCorrect={false}
         onChangeText={(value)=> this.setState({email: value})}
         />

        <TextInput style={styles.textInput2} 
        placeholderTextColor = "#555555"
        secureTextEntry={this.state.hidden} 
        underlineColorAndroid="transparent"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        onChangeText={(value)=> this.setState({password: value})}
        />
        
        <Loader
          loading={this.state.loading} />
  
        <TouchableOpacity style={styles.button}
        onPress={() => this.validate()}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

     

        </ScrollView>
     </View>
    );
  }
}

const Navigator = createStackNavigator({
  Home2: {
    screen: loginscreen,
    navigationOptions: {
        header: null,
        gesturesEnabled: false
    }
  },
  App2Screen: {
      screen: App2,
      navigationOptions: {
          header: null,
          gesturesEnabled: false,
      }
  }
});

const styles = StyleSheet.create({
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
},
error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
},
  back: {
    justifyContent: 'center',
    backgroundColor: '#00aafc',
  },
  Alreadytxt: {
    bottom: 90,
    left: 3.5,
  },
  hidebtn:{
    alignSelf: 'center',
    bottom: 20,
    left: 3,
  },
  hidebtntext: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    justifyContent: 'center',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 4,
  },
  textInput1: {
    textAlign: 'center',
    alignItems: 'stretch',
    bottom: 737.5,
    height: 65,
    left: 19,
    width: 337.5,
    marginBottom: 30,
    color: '#000000',
    borderRadius: 3,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderLeftColor: '#dcdcdc',
    borderRightWidth: 3,
    borderRightColor: '#dcdcdc',
    borderTopColor: '#dcdcdc',
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 3,
    backgroundColor: '#fff',
  },
  textInput2: {
    textAlign: 'center',
    alignItems: 'stretch',
    bottom: 712.5,
    height: 65,
    left: 19,
    width: 337.5,
    marginBottom: 30,
    color: '#000000',
    borderRadius: 3,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderLeftColor: '#dcdcdc',
    borderRightWidth: 3,
    borderRightColor: '#dcdcdc',
    borderTopColor: '#dcdcdc',
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 3,
    backgroundColor: '#fff',
  },
  button: {
    bottom: 700,
    width: 332.5,
    left: 20,
    height: 85,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3399ff',
    marginTop: 30,
    borderRadius: 60,
    borderColor: '#fff',
    borderWidth: 2
  },
  btntext: {
    bottom: -5,
    color: '#fff',
    fontSize: 23
  },
  btntext1: {
    bottom: -7.5,
    color: '#fff',
    fontSize: 17.5,
  },
  button10: {
    bottom: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
    width: 90,
    height: 80,
    left: 40,
    bottom: 22.5
 },
    
});

export default createAppContainer(Navigator);