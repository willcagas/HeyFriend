import React, {Component} from 'react';
import { 
   Text,
   StyleSheet,
   View,
   TextInput,
   TouchableOpacity,
   ScrollView,
   Alert,
   Image,
   KeyboardAvoidingView
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Profile from './Rules.js';
import LoginScreen from './LoginScreen.js';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";
import ChoicesScreen from './ChoicesScreen.js';
import HomeScreen from './HomeScreen.js';
import Loader from './Loader.js';
import { AsyncStorage } from 'react-native';

class navigate extends Component {
  render(){
    return(
      <View>
        {this.props.navigation.navigate('ProfileUser')}
      </View>
    )
  }
}


class regform extends Component {
  constructor(props){
    super(props);
    this.state={
      password: '',
      email: '',
      school: '',
      errorMessage: null,
      valid: true,
      user: false,
      isAgreedTC: false,
      isAgreedPP: false,
      spinner: false,
      UID: null,
      loading: false,

    }
    this.navigate=this.navigate.bind(this);
  }

  handleUser = () => {
    this.writeUser(),
    this.props.navigation.navigate('ProfileUser')
  }

  navigate = () => {
    this.props.navigation.navigate('ProfileUser')
  }

  user = () => {
    this.state = this.state.email
  }

  valUser = () => {
    firebase
    .auth()
    .catch(
      error =>
      Alert.alert(
          errorMessage = error.message,
      )        
    )
  }

  valFunc = () => {
    if ( firebase.auth().currentUser) {
      this.validate2()
    }
    else{
      
    }
  }

  handleSignUp = () => {
    this.validate()
  };

  writeUser = () => {
    firebase
    .database()
    .ref('UserList/')
    .push({
        email: this.state.email,
        password: this.state.password,
        school: this.state.school,
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }

  agreeToTC = () => {
    this.props.navigation.navigate('TermsConditions')
    this.setState({isAgreedTC: true})
  }

  agreeToPP = () => {
    this.props.navigation.navigate('Privacy')
    this.setState({isAgreedPP: true})
  }

  validate = ()=>{
    const {password, email, school, valid, isAgreedTC, isAgreedPP} = this.state
    if (email == ''){
      valid == 2
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
      valid == 3
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
      if (school == ''){
        valid == 1
        Alert.alert(
          'Oops...',
          'School is Invalid',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        return false
      }
      if (isAgreedTC == false){
        valid == 3
            Alert.alert(
              'Oops...',
              'Please agree to the terms and conditions of HeyFriend! app',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
        return false
      }
      if (isAgreedPP == false){
        valid == 3
            Alert.alert(
              'Oops...',
              'Please agree to the privacy policy of HeyFriend! app',
              [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              {cancelable: false},
            );
        return false
      }
      else if (email !== '', password !== '', school !== '', isAgreedTC == true, isAgreedPP == true) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        if (firebase.auth().currentUser){
       
        }
        else {
          Alert.alert(
            errorMessage = error.message
          )
        }
      }
      )
      .then(this.valFunc())
    }
     return true
  }

  validate2 = () => {
    this.writeUser(),
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
      this.props.navigation.navigate('ProfileUser')}
      , 2000)
  }

  


  render() {
    return (

      <View style={{backgroundColor: "#00affc"}}>
        <View style={{height: 70, backgroundColor: '#0095d6'}}>
        <TouchableOpacity style={styles.button10}
               onPress={() => this.props.navigation.pop()}>
                   <Text style={styles.btntext}>Back</Text>
               </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{borderColor: 'red', borderWidth: 2, bottom: 40, width: 20, left: -20}}>
          <Ionicons name='ios-arrow-back' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 40, left: 35}}/>
        </TouchableOpacity>
        </View>

      <ScrollView>
      <KeyboardAvoidingView behavior="padding"  style={{flex:1, flexDirection:'row'}} >
    <View style={styles.back}>

     <View style={styles.errorMessage}>
       {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
     </View>

     <Loader
          loading={this.state.loading} />

     <Image
        style={{
          alignSelf: 'center',
          width: "119%",
          height: '120%',
          bottom: -230
        }}
        source={require('./2-SignUp.png')}
      />
      
        <TextInput style={styles.textInput1}
         placeholderTextColor = "#555555"
         underlineColorAndroid="transparent"
         autoCapitalize='none'
         autoCorrect={false}
         maxLength={32}
         />

        <TextInput style={styles.textInput2}
        placeholderTextColor = "#555555"
        underlineColorAndroid="transparent"
        autoCapitalize='none'
        autoCorrect={false}
        maxLength={32}
        onChangeText={(value)=> this.setState({email: value})}
        />

        <TextInput style={styles.textInput3}
        placeholderTextColor = "#555555"
        underlineColorAndroid="transparent"
        maxLength={32}
        onChangeText={(value)=> this.setState({password: value})}
        />

        <TextInput style={styles.textInput4}
        placeholderTextColor = "#555555"
        underlineColorAndroid="transparent"
        maxLength={32}
        onChangeText={(value)=> this.setState({school: value})}
        />



        <TouchableOpacity style={{bottom: 309.5, left: 11, alignSelf: 'flex-end'}}
        onPress={() => this.agreeToTC()}
        >
          <Text style={styles.btntext2}>Terms and Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{bottom: 305.5, 
        left: -85,
        alignSelf: 'flex-end'}}
        onPress={() => this.agreeToPP()}
        >
          <Text style={styles.btntext2}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={this.handleSignUp}>
          <Text style={styles.btntext}>Create Account</Text>
        </TouchableOpacity>


        <TouchableOpacity 
        style={styles.Alreadytxt}
        onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.hidebtntext}>Login Here</Text>
        </TouchableOpacity>

        <Ionicons name='ios-person' style={{bottom: 968, alignSelf: 'flex-end'}} size={37.5} color={'black'}/>

        <Ionicons name='ios-mail' style={{bottom: 890, alignSelf: 'flex-end'}} size={37.5} color={'black'}/>
      
        <Ionicons name='ios-lock' style={{bottom: 815, alignSelf: 'flex-end'}} size={37.5} color={'black'}/>

        <Ionicons name='ios-school' style={{bottom: 740, alignSelf: 'flex-end'}} size={37.5} color={'black'}/>

      

    </View>
    </KeyboardAvoidingView>
    </ScrollView>
    <Ionicons name='ios-person' style={{alignSelf: 'flex-end'}} size={37.5} color={'#00affc'}/>

<Ionicons name='ios-mail' style={{ alignSelf: 'flex-end'}} size={37.5} color={'#00affc'}/>

<Ionicons name='ios-lock' style={{alignSelf: 'flex-end'}} size={37.5} color={'#00affc'}/>

<Ionicons name='ios-school' style={{alignSelf: 'flex-end'}} size={37.5} color={'#00affc'}/>
    </View>
    );
  }
}

class Terms extends Component {
  

  render() {
     return(
         <View style={{ flex: 1,
             backgroundColor: '#fff',
             paddingLeft: 15,
             paddingRight: 10
             }}>
             <ScrollView>

             <Text style={styles.header}>
                 Terms and Conditions
             </Text>
            
             <Text style={styles.subheading}>
                 PLEASE READ THE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS APP
             </Text>

             <Text style={{bottom: -25}}>Welcome to HeyFriend!</Text>

             <Text style={{bottom: -45, alignContent: 'center'}}>
             By browsing and using this app you signify your agreement to comply with and be bound by the following terms and conditions of use which govern HeyFriend’s relationship with you as related to this app. Please do not use our app if you disagree with any part of these terms and conditions. The term ‘HeyFriend!’ or ‘us’ or ‘we’ refers to the owner of the app with the registered address of 260 Guildwood Drive, Hamilton, On. The term ‘you’ refers to the user or viewer of our app. 
             </Text>

             <Text style={{bottom: -60, alignContent: 'center'}}>
             The use of this app is subject to the following terms of use: 
             </Text>

             <Text style={{bottom: -75, alignContent: 'center'}}>
             1. The content of this app is for general information purposes only. It is subject to change without notice.   
             </Text>

             <Text style={{bottom: -95, alignContent: 'center'}}>
             2. This app uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.  
             </Text>

             <Text style={{bottom: -105, alignContent: 'center'}}>
             3. We provide no warranty or guarantee as to the accuracy, completeness, performance, suitability or timeliness of the information and materials found or offered on this app for any particular purpose. You acknowledge that such information and materials may contain errors or inaccuracies and we expressly exclude liability for any such errors or inaccuracies to the fullest extent permitted by law. 
             </Text>

             <Text style={{bottom: -115, alignContent: 'center'}}>
             4. We shall not be liable for any information or materials on this app and your use of any information or materials found on this app is entirely at your own risk. Ensuring that any products, services or information available through this app meet your specific requirements is your responsibility.   
             </Text>

             <Text style={{bottom: -125, alignContent: 'center'}}>                        
             6. The unauthorized use of this app may result in a claim for damages and/or be a criminal offence.  
             </Text>

             <Text style={{bottom: -135, alignContent: 'center'}}>
             7. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
             </Text>

             <TouchableOpacity style={{bottom: -155, alignContent: 'center', borderTopColor: "#e0e0e0", borderTopWidth: 2}}
             onPress={() => this.props.navigation.navigate('Home2')}
             >
                 <Text style={{alignSelf: "center", fontSize: 18, color: "rgb(0, 122, 255)"}}>I Agree</Text>
             </TouchableOpacity>

             <Text style={{bottom: -150, alignContent: 'center', color: '#fff'}}>
             6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
             </Text>
             <Text style={{bottom: -150, alignContent: 'center', color: '#fff'}}>
             6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
             </Text>
             <Text style={{bottom: -150, alignContent: 'center', color: '#fff'}}>
             6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
             </Text>
             <Text style={{bottom: -150, alignContent: 'center', color: '#fff'}}>
             6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
             </Text>
             <Text style={{bottom: -150, alignContent: 'center', color: '#fff'}}>
             6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
             </Text>


             </ScrollView>
         </View>
     )
  }
 }

 class Privacy extends Component {
     render() {
        return(
            <View style={{ flex: 1,
                backgroundColor: '#fff',
                paddingLeft: 15,
                paddingRight: 10
                }}>

                <ScrollView>
                <Text style={styles.header}>
                    Privacy Policy
                </Text>
                
                <Text style={styles.subheading}>
                    PLEASE READ THE PRIVACY POLICY CAREFULLY BEFORE USING THIS APP
                </Text>
                <Text style={{bottom: -10, alignContent: 'center'}}>
                This statement relates to the privacy practices of HeyFriend! mobile app. 
                </Text>
                <Text style={{bottom: -20, alignContent: 'center', fontWeight: 'bold'}}>
                General statement  
                </Text>
                <Text style={{bottom: -30, alignContent: 'center'}}>
                HeyFriend! respects your right to privacy and actively seeks to maintain the privacy rights of those who share personal information with us. 
                </Text>
                <Text style={{bottom: -40, alignContent: 'center', fontWeight: 'bold'}}>
                Gathering and use of personal information
                </Text>
                <Text style={{bottom: -45, alignContent: 'center'}}>
                HeyFriend! does not collect any personal information about you on their website other than information which you voluntarily provide. HeyFriend! only makes use of such information in line with the purpose for which you provided it as is necessary to provide you with the information and/or service you require. HeyFriend! will not disclose your information to any third party without informing you first or unless it is required to use a third party to process the information for us. Should we need a third party to process information HeyFriend! requires these third parties to comply with their instructions and also require that the third party agree not to use your personal information for their own purposes unless you have explicitly consented for them to do so.
                </Text>
                <Text style={{bottom: -55, alignContent: 'center', fontWeight: 'bold'}}>
                Use of cookies  
                </Text>
                <Text style={{bottom: -60, alignContent: 'center'}}>
                Our app uses cookies which are small text files placed on your computer by our website so that HeyFriend!’s website scripts are able to analyze how visitors use our website and record visitor preferences. HeyFriend’s website uses two different types of cookies: 
HeyFriend! uses cookies to collect traffic data to the app to help us analyze how visitors use the site. Such cookies are used to collect anonymous data on user behavior and are not used to identify a user personally. The information stored in the cookie is used to evaluate use of this website and to compile statistical reports on app activity for HeyFriend!. 
                </Text>
                <Text style={{bottom: -70, alignContent: 'center', fontWeight: 'bold'}}>
                Disabling cookies  
                </Text>
                <Text style={{bottom: -75, alignContent: 'center'}}>
                Cookies may be blocked by adjusting the browser settings on your device. Blocking cookies will cause no loss of functionality. 
                </Text>
                <Text style={{bottom: -85, alignContent: 'center', fontWeight: 'bold'}}>
                Links  
                </Text>
                <Text style={{bottom: -90, alignContent: 'center'}}>
                HeyFriend! is not responsible for the content or privacy practices of other websites. The privacy practices on these websites may differ from that on the HeyFriend’s website, and it is advised that you review the other websites’ policies before providing personal information.   
                </Text>
                <Text style={{bottom: -100, alignContent: 'center', fontWeight: 'bold'}}>
                Right of Access 
                </Text>
                <Text style={{bottom: -105, alignContent: 'center'}}>
                You have the right to ask for a copy of your personal data. Should you want to take advantage of this right email us at heyfriendapp@gmail.com. To protect your privacy, you may be asked to provide suitable proof of identification. If any of your details are incorrect please let us know and we will correct them.  
                </Text>
                <Text style={{bottom: -115, alignContent: 'center', fontWeight: 'bold'}}>
                Revisions to Privacy Policy
                </Text>
                <Text style={{bottom: -120, alignContent: 'center'}}>
                HeyFriend! may revise this privacy statement from time to time. Changes to this privacy policy will be posted here so you should check this page periodically to review the most recent statement.
                </Text>
                <Text style={{bottom: -120, alignContent: 'center', color: '#fff'}}>
                HeyFriend! may revise this privacy statement from time to time. Changes to this privacy policy will be posted here so you should check this page periodically to review the most recent statement.
                </Text>
                <Text style={{bottom: -120, alignContent: 'center', color: '#fff'}}>
                HeyFriend! may revise this privacy statement from time to time. Changes to this privacy policy will be posted here so you should check this page periodically to review the most recent statement.
                </Text>
                <Text style={{bottom: -120, alignContent: 'center', color: '#fff'}}>
                HeyFriend! may revise this privacy statement from time to time. Changes to this privacy policy will be posted here so you should check this page periodically to review the most recent statement.
                </Text>
                <TouchableOpacity style={{bottom: 55, alignContent: 'center', borderTopColor: "#e0e0e0", borderTopWidth: 2}}
             onPress={() => this.props.navigation.navigate('Home2')}
             >
                 <Text style={{alignSelf: "center", fontSize: 18, color: "rgb(0, 122, 255)"}}>I Agree</Text>
             </TouchableOpacity>

                </ScrollView>
            </View>
        )
     }
    }

const Navigator = createStackNavigator({
  Home2: {
    screen: regform,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
    },
  ProfileUser: {
    screen: Profile,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
        header: null,
        gesturesEnabled: false
    }
  },
  Choices: {
    screen: ChoicesScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  TermsConditions: {
    screen: Terms,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Privacy: {
    screen: Privacy,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  }
},
{
  initialRouteName: 'Home2'
}
);

const styles = StyleSheet.create({
  header2: {
    borderBottomWidth: 50,
    backgroundColor: '#0095d6',
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    bottom: 200
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  error2: {
    color: "#40e0d0",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  back: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00affc',
    paddingLeft: 30,
    paddingRight: 30
  },
  container: {
    flex: 1
  },
  Alreadytxt: {
    bottom: 495,
    alignSelf: 'center'
  },
  hidebtn: {
    alignSelf: 'center',
    bottom: 20,
    left: 3.5,
  },
  hidebtntext: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  regform: {
    alignSelf: 'stretch',
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
    alignSelf: 'center',
    bottom: 461.5,
    height: 59,
    width: '107%',
    borderWidth: -10,
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
    alignSelf: 'center',
    bottom: 433,
    height: 59,
    width: '107%',
    borderWidth: -10,
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
  textInput3: {
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 405.75,
    height: 59,
    width: '107%',
    borderWidth: -10,
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
  textInput4: {
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 377.75,
    height: 59,
    width: '107%',
    borderWidth: -10,
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
    bottom: 320,
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
  btntext: {
    bottom: -7.5,
    color: '#fff',
    fontSize: 17.5,
  },
  btntext1: {
    color: '#fff',
    fontSize: 17.5,

  },
  btntext2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  errorRed: {
    borderBottomWidth: 3,
    borderBottomColor: 'red'
  },
  header: {
    bottom: -10,
    textAlign: 'center',
    fontSize: 24,
    color: '#000000',
    justifyContent: 'center',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 4,
    textDecorationLine: 'underline'
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 15
  },
  button10: {
    bottom: 30,
    left: -100,
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
    width: 90,
    height: 80,
    left: 15,
    bottom: 22.5
 },
});

export default createAppContainer(Navigator);