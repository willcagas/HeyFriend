import React, {Component} from 'react';
import { 
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    ScrollView
 } from 'react-native';
 import { createStackNavigator } from 'react-navigation-stack';
 import { createAppContainer } from 'react-navigation';
 import Chat from './GiftedChat';


class DirectMessage extends Component {
    render() {
       return(
          
           <View style={{flex: 1, backgroundColor: '#00affc'}}>
               <Text style={styles.header}/>
               <Text style={{alignSelf: 'center', bottom: 35, fontSize: 23, fontWeight: 'bold', color: '#fff'}}>Messages</Text>
               <ScrollView>
              <TouchableOpacity style={{width: '100%', height: 75, borderColor: 'white', borderBottomWidth: 2, borderTopWidth: 2, alignSelf: 'center', justifyContent: 'center', backgroundColor: '#00aafc'}}
              onPress={() => this.props.navigation.navigate('MessagesScreen')}
              >
                <Image source={require('./hello.jpg')} style={{left: 15, alignSelf: 'flex-start', height: 65, width: 65, borderRadius: 32.5, bottom: -11}}/>
  
                <Text style={{left: 82.5, alignSelf: 'flex-start', color: 'white', fontSize: 20, bottom: 32.5}}>Rama</Text>
                
              </TouchableOpacity>
              </ScrollView>
           </View>
          
       )
    }
   }

const Navigator = createStackNavigator({
    Home: {
        screen: DirectMessage,
        navigationOptions: {
            header: null
        }
    },
    MessagesScreen: {
        screen: Chat,
        navigationOptions: {
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#0095d6',
        },
        headerTintColor: "white",
        }
    }
  },
  {
      initialRouteName: "Home"
  }
)

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 50,
        backgroundColor: '#0095d6',
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default createAppContainer(Navigator);