import React, {Component} from 'react';
import { 
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    StyleSheet
 } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from "firebase";
import { sendEmail } from './EmailReportCentre.js'
import { Linking } from 'react-native';
import Loader from './Loader.js';

export default class SettingsScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      loading: false,
    }
  }

    handleSignOut = () => {
     firebase.auth().signOut()
     this.setState({loading: true})
     setTimeout(() => {
       this.setState({loading: false})
       this.props.navigation.popToTop('Home1')}
       , 1000)

    }

    sendReport = () => {
        sendEmail(

          'heyfriendapp@gmail.com',
        
          'Report Centre',
        
          '<Report your issue here>',
        
        ).then(() => {
        
          console.log('Our email successful provided to device mail ');
        
          });
        }
    
        Linked = async() => {
          const canOpen = await Linking.canOpenURL('https://www.instagram.com/hey_friend_app/');
    
          if (!canOpen) {
      
              throw new Error('Provided URL can not be handled');
      
          }
          else {
    
              Linking.openURL('https://www.instagram.com/hey_friend_app/')
    
          }
     
    }

   render() {
      return(
          <View style={{flex: 1, backgroundColor: '#00affc'}}>
            <View style={{height: 70, backgroundColor: '#0095d6'}}>
        <TouchableOpacity style={styles.button10}
               onPress={() => this.props.navigation.pop()}>
                   <Text style={styles.btntext}>Back</Text>
               </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.pop()} style={{bottom: 40, width: 20, left: -20}}>
          <Ionicons name='ios-arrow-back' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 40, left: 35}}/>
        </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 23,
          color: "white", bottom: 40, alignSelf: "center", fontWeight: "bold"}}>Settings</Text>
              <ScrollView>
              <TouchableOpacity style={{ bottom: -15, width: '100%', height: 50, borderBottomColor: '#808080', borderTopColor: '#808080', borderBottomWidth: 2, borderTopWidth: 2,  alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white'}}
               onPress={() => this.props.navigation.navigate('EmailVerify')}
               >
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: '#323232', fontSize: 18}}>Verify Your Email</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#323232"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
              <Text style={{alignSelf: 'center', bottom: -35, fontSize: 24, fontWeight: 'bold', color: 'white', left: -115}}>Policies</Text>
              <TouchableOpacity style={{bottom: -55, width: '100%', height: 50, borderBottomColor: '#808080', borderTopColor: '#808080', borderBottomWidth: 2, borderTopWidth: 2,  alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white'}}
               onPress={() => this.props.navigation.navigate('TermsConditions')}
               >
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: '#323232', fontSize: 18}}>Terms and Conditions</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#323232"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <TouchableOpacity style={{bottom: -55, width: '100%', height: 50, borderBottomColor: '#808080', borderTopColor: '#808080', borderBottomWidth: 2,  alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white'}}
               onPress={() => this.props.navigation.navigate('Privacy')}
               >
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: '#323232', fontSize: 18}}>Privacy Policy</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#323232"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <Text style={{alignSelf: 'center', bottom: -95, fontSize: 24, fontWeight: 'bold',  color: 'white', left: -132.5}}>Help</Text>
             <TouchableOpacity style={{bottom: -115, width: '100%', height: 50, borderBottomColor: '#808080', borderTopColor: '#808080', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white'}}
               onPress={() => this.sendReport()}
               >
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: '#323232', fontSize: 18}}>Report a Problem</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#323232"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <Text style={{alignSelf: 'center', bottom: -155, fontSize: 24, fontWeight: 'bold',  color: 'white', left: -107.5}}>Connect</Text>
             <TouchableOpacity style={{bottom: -175, width: '100%', height: 50, borderBottomColor: '#808080', borderTopColor: '#808080', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white'}}
               onPress={() => this.Linked()}
               >
               <Text style={{left: 10, bottom: -15, alignSelf: 'flex-start', color: '#323232', fontSize: 18}}>Follow us on Instagram</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#323232"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <TouchableOpacity style={{bottom: -235, width: '100%', height: 50, borderBottomColor: '#808080', borderTopColor: '#808080', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white'}}
             onPress={() => 
               Alert.alert(
               'Are you sure you want to logout?',
               '',
               [
                 {text: 'Confirm', onPress: () => this.handleSignOut(), },
                 {
                   text: 'Cancel',
                   onPress: () => console.log('Cancel Pressed'),
                   style: 'cancel',
                 }
               ],
               {cancelable: false},
             )}
             >
               <Text style={{alignSelf: 'center', color: 'red', fontSize: 18}}>Logout</Text>
             </TouchableOpacity>

             <Loader
          loading={this.state.loading} />

             <Image style={{
               alignSelf: 'center',
               width: 100,
               height: 100,
               bottom: -260}}
               source={require('./Molecule.png')}
             />


             <Text style={{alignSelf: 'center', bottom: -270, fontSize: 14, fontWeight: 'bold', color: 'white'}}>Version 1.0</Text>

             <TouchableOpacity style={{bottom: -4000, width: '100%', height: 50, borderBottomColor: '#e0e0e0', borderTopColor: '#e0e0e0', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0'}}>
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: "#e0e0e0", fontSize: 18}}>Logout</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#e0e0e0"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <TouchableOpacity style={{bottom: -4000, width: '100%', height: 50, borderBottomColor: '#e0e0e0', borderTopColor: '#e0e0e0', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0'}}>
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: "#e0e0e0", fontSize: 18}}>Logout</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#e0e0e0"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <TouchableOpacity style={{bottom: -4000, width: '100%', height: 50, borderBottomColor: '#e0e0e0', borderTopColor: '#e0e0e0', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0'}}>
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: "#e0e0e0", fontSize: 18}}>Logout</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#e0e0e0"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <TouchableOpacity style={{bottom: -4000, width: '100%', height: 50, borderBottomColor: '#e0e0e0', borderTopColor: '#e0e0e0', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0'}}>
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: "#e0e0e0", fontSize: 18}}>Logout</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#e0e0e0"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <TouchableOpacity style={{bottom: -4000, width: '100%', height: 50, borderBottomColor: '#e0e0e0', borderTopColor: '#e0e0e0', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0'}}>
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: "#e0e0e0", fontSize: 18}}>Logout</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#e0e0e0"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             <TouchableOpacity style={{bottom: -4000, width: '100%', height: 50, borderBottomColor: '#e0e0e0', borderTopColor: '#e0e0e0', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0'}}>
               <Text style={{left: 15, bottom: -15, alignSelf: 'flex-start', color: "#e0e0e0", fontSize: 18}}>Logout</Text>
               <Ionicons name='ios-arrow-forward' size={27} color={"#e0e0e0"} style={{alignSelf: "flex-end", bottom: 12.5, left: -10}} />
             </TouchableOpacity>
             
             </ScrollView>
          </View>
          
      )
   }
  }

  const styles = StyleSheet.create({
    btntext: {
      bottom: -7.5,
      color: '#fff',
      fontSize: 17.5,
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
  