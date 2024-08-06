import React, {Component} from 'react';
import { 
    Text,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
 } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import App2Screen from './UserInfo.js';
import { Ionicons } from '@expo/vector-icons';

class Guidelines extends Component {
     render() {
        return(
            <View style={{ flex: 1,
                backgroundColor: '#00affc',
                paddingLeft: 15,
                paddingRight: 10,
                }}>
                <ScrollView>
                <Text style={styles.header}>
                    HeyFriend! Community Guidelines
                </Text>

                <Text style={{bottom: -60, alignContent: 'center', fontSize: 18, color: "white"}}>
                The use of this app is subject to the following community guidelines: 
                </Text>

                <Text style={{bottom: -85, alignContent: 'center', fontSize: 16, color: "white"}}>
                1. Be respectful. 
                </Text>

                <Text style={{bottom: -105, alignContent: 'center', fontSize: 16, color: "white"}}>
                2. Bullying will not be tolerated.  
                </Text>

                <Text style={{bottom: -125, alignContent: 'center', fontSize: 16, color: "white"}}>
                3. Be kind. 
                </Text>

                <Text style={{bottom: -145, alignContent: 'center', fontSize: 16, color: "white"}}>
                4. Be safe. Hangouts should take place in public.               </Text>

                <Text style={{bottom: -165, alignContent: 'center', fontSize: 16, color: "white"}}>                        
                6. No posting of inappropriate photos.  
                </Text>

                <Text style={{bottom: -185, alignContent: 'center', fontSize: 16, color: "white"}}>
                7. Be yourself. Fake accounts will be deactivated.
                </Text>

                <TouchableOpacity style={styles.button}
               onPress={() => this.props.navigation.navigate('App2')}>
                   <Text style={styles.btntext}>Next</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('App2')}>
                  <Ionicons name='ios-arrow-forward' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 375, left: 157.5}}/>
               </TouchableOpacity>

                <Text style={{bottom: -150, alignContent: 'center', color: '#00affc'}}>
                6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
                </Text>
                <Text style={{bottom: -150, alignContent: 'center', color: '#00affc'}}>
                6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
                </Text>
                <Text style={{bottom: -150, alignContent: 'center', color: '#00affc'}}>
                6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
                </Text>
                <Text style={{bottom: -150, alignContent: 'center', color: '#00affc'}}>
                6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
                </Text>
                <Text style={{bottom: -150, alignContent: 'center', color: '#00affc'}}>
                6. Your use of this app and any dispute resulting from the use of the app is subject to the laws of Canada. 
                </Text>


                </ScrollView>
            </View>
        )
     }
    }

    const Navigator = createStackNavigator({
        Guide: {
          screen: Guidelines,
          navigationOptions: {
              header: null
          }
        },
        App2: {
            screen: App2Screen,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
              
            }
        }
    });


const styles = StyleSheet.create({
    header: {
        bottom: -80,
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
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
    button: {
        bottom: 330,
        left: 125,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        marginTop: 30,
     },
     btntext: {
      color: '#fff',
      fontSize: 17.5
   },
})

export default createAppContainer(Navigator);