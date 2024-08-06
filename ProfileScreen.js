import React, {Component} from 'react';
import { 
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ScrollView,
    Alert,
    TouchableHighlight
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Terms from './TermsService';
import SettingsScreen from './Settings.js';
import PrivacyPolicy from './Privacy';
import * as firebase from "firebase";
import { withTheme } from 'react-native-elements';
import HomeScreen from './HomeScreen.js';

class ProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      name: ''
    }
  }

  handleProfile = () => {
    firebase
      .database()
      .ref('/UserList/')
      .on('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let nameDisplay = {...data};
        this.setState({
          name: nameDisplay
        })
     })
     alert(this.state.name);  
   }

   render() {
      return(
          <View style={{flex: 1, backgroundColor: '#00affc'}}>
            <View>
              <Text style={styles.header}/>

              <TouchableOpacity style={{bottom: 45, left: 10, width: 30}} onPress={() => this.props.navigation.navigate('Settings')}>
               <Ionicons name='ios-settings' size={37.5} color={"white"}  />
              </TouchableOpacity>

              <TouchableOpacity style={{bottom: 85, left: 345}} onPress={() => this.props.navigation.navigate('Notify')}>                
                <Ionicons name='ios-notifications' size={37.5} color={"white"} />
              </TouchableOpacity>

               <Text style={{alignSelf: 'center', bottom: 120, fontSize: 23, fontWeight: 'bold', color: '#fff'}}>Profile</Text>

               </View>

               <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', left: 20, color: "black", fontFamily: 'Verdana', bottom: -297.5}}>William, 13</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -305, fontFamily: 'Verdana'}}>Goal: Hangout</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -315, fontFamily: 'Verdana'}}>Interests: </Text>

        <TouchableHighlight
      style={styles.talk}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-football' size={26} style={{left: 1.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, left: 25}}>Sports and Fitness</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={styles.talk2}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-cafe' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, left: 35}}>Food and Drink</Text>
        </View>
    </TouchableHighlight>

        
        <Image source={require('./1.jpg')} style={{height: 400, width: 375, alignSelf: 'center', bottom: 300}}></Image>


          <Ionicons name='ios-bowtie' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Fashion</Text>
           </View>
       )
    }
   }

   class report extends Component {
     render(){
       return(
        <View style={{ flex: 1,
          backgroundColor: '#fff',
          }}>
          <Text style={styles.header2}>
            Report Centre
          </Text>
          <Text style={styles.subheading1}>
            Encounter a Problem? Want to give feedback?
          </Text>
          <Text style={styles.subheading2}>
            Contact us at
          </Text>
          <Text style={styles.subheading3}>
            heyfriendapp@gmail.com.
          </Text>
      </View>
       )
     }
   }

   class notifications extends Component {
    render(){
      return(
       <View style={{ flex: 1,
         backgroundColor: '#00affc',
         }}>
           <View style={{height: 70, backgroundColor: '#0095d6'}}>
        <TouchableOpacity style={styles.button10}
               onPress={() => this.props.navigation.pop()}>
                   <Text style={styles.btntext2}>Back</Text>
               </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{bottom: 40, width: 20, left: -20}}>
          <Ionicons name='ios-arrow-back' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 40, left: 35}}/>
        </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 23,
          color: "white", bottom: 40, alignSelf: "center", fontWeight: "bold"}}>Notifications</Text>

         <Text style={styles.header4}>
           There are no new notifications yet
         </Text>
     </View>
      )
    }
  }

  class emailVerification extends Component {
    constructor(props){
      super(props);
      this.state={
        email: '',
        isVerified: false
      }
    }

    handleVerify = () => {
      if (this.state.isVerified == false) {
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        Alert.alert(
          'Sent!',
          'A verification email has been sent to your email',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
        this.setState({isVerified: true})

      }).catch(function(error) {
        // An error happened.
      });
      }
      else if (this.state.isVerified == true){
        Alert.alert(
          'Oops...',
          'Looks like you already verified your email',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      }
    }
    
    render(){
      return(
       <View style={{ flex: 1,
         backgroundColor: '#00affc', paddingLeft: 15, paddingRight: 15
         }}>

      <TouchableOpacity onPress={() => this.handleVerify()}
        style={styles.button}>
        <Text style={styles.btntext}>
         Verify Your Email
        </Text>
     </TouchableOpacity>

     </View>
      )
    }
  }
   
   const Navigator = createStackNavigator({
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
        transitionerStyle: {backgroundColor: '#0095d6'} ,
      },
      transitionerStyle: {backgroundColor: '#0095d6'} ,
      cardStyle: {
        opacity: 1
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        headerStyle: {
            backgroundColor: '#0095d6',
        },
        transitionerStyle: {backgroundColor: '#0095d6'},
        cardStyle: {
          opacity: 1,
        },
        },
      transitionerStyle: {backgroundColor: '#0095d6'} ,
      cardStyle: {
        opacity: 1,
      },
    },
    TermsConditions: {
        screen: Terms,
        navigationOptions: {
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: '#0095d6',
          },
          headerTintColor: "white",
          transitionerStyle: {backgroundColor: '#0095d6'} ,
        }
      },
    Privacy: {
        screen: PrivacyPolicy,
        navigationOptions: {
          gesturesEnabled: false,
          headerStyle: {
            backgroundColor: '#0095d6',
          },
          headerTintColor: "white",
          transitionerStyle: {backgroundColor: '#0095d6'} ,
        }
    },
    EmailVerify: {
      screen: emailVerification,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#0095d6',
        },
        headerTintColor: "white",
        transitionerStyle: {backgroundColor: '#0095d6'} ,
      }
  },
    ReportProblem: {
      screen: report,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#0095d6',
        },
        headerTintColor: "white",
        transitionerStyle: {backgroundColor: '#0095d6'} ,
      }
    },
    Notify: {
      screen: notifications,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
        transitionerStyle: {backgroundColor: '#0095d6'} ,
      }
    },
    Home1: {
      screen: HomeScreen,
      navigationOptions: {
        gesturesEnabled: false,
        header: null
      }
    }
  },
  {
    initialRouteName: 'Profile',
  }
  );
  

   const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 50,
        backgroundColor: '#0095d6',
    },
    header2: {
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
  header4: {
    bottom: -30,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    justifyContent: 'center',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 4,
    fontWeight: "bold"
},
    subheading1: {
        fontSize: 17,
        alignSelf: "center",
        bottom: -175
    },
    subheading2: {
      fontSize: 18,
      alignSelf: "center",
      bottom: -185,
      left: -100,
  },
  subheading3: {
    fontSize: 16,
    left: 60,
    alignSelf: "center",
    textDecorationLine: "underline",
    bottom: -164
},
    avatar: {
      borderRadius: 75,
      alignSelf: 'center',
      width: 150,
      height: 150,
      bottom: 50,
    },
    
    avatar1: {

      position: "absolute",

      width: 175,

      height: 175,

      borderRadius: 87.5,

      borderWidth: 3,

      borderColor: 'white',

  },
    textInput2: {
      textAlign: 'center',
      alignSelf: 'center',
      bottom: -200,
      height: 59,
      width: '95%',
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
      bottom: -300,
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
      fontSize: 21.5,
    },
    talk: {
      borderWidth: 2, borderColor: "white", borderRadius: 60, 
      alignSelf: "center", 
      height: 40,
      width: 160,
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: '#00affc',
      bottom: -320,
      left: -95
  
    },
    talk2: {
      borderWidth: 2, borderColor: "white", borderRadius: 60, 
      alignSelf: "center", 
      height: 40,
      width: 160,
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: '#00affc',
      bottom: -260,
      left: 95
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
     btntext2: {
      bottom: -7.5,
      color: '#fff',
      fontSize: 17.5,
    },
  })

  export default createAppContainer(Navigator);