import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, StatusBar, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UserPermissions from "./UserPermissions.js";
import * as ImagePicker from "expo-image-picker";
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChoicesScreen from './ChoicesScreen.js';
import * as firebase from "firebase";
import UserCamera from './UserCameraRollPermission';
import { ImageBackground } from "react-native";



class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        user: {
            valid: true,
            avatar: null,
            errorMessage: null,
        },
        errorMessage: null
    };

    handleAvatarStorage = () => {
    const {avatar} = this.state.user
        this.getFileBlob(avatar, blob =>{
            firebase
            .storage()
            .ref('UserProfilePics/Pic')
            .put(blob)
            .then(snap => {
                console.log('successful upload', snap)
          }).catch(
            
          )
        })
        this.props.navigation.navigate('Choices')
    };

    validate = () => {
        const {valid} = this.state.user
        if (valid == true){
            this.handleAvatarStorage()
        }
        else if(valid ==  false){
            Alert.alert(
                'Oops...',
                'There is no image selected',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        }
    }

    getFileBlob = function (url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.addEventListener('load', function() {
          cb(xhr.response);
        });
        xhr.send();
    };

    handlePickAvatar = () => {
        Alert.alert(
            'Choose an option',
            '',
            [
              {text: 'Select from Gallery', onPress: () => this.handlePickImage()},
              {text: 'Take a Selfie', onPress: () => this.handleSelectSelfie()},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
            ],
          );
    };

    handlePickImage = async () => {
        UserPermissions.getCameraPermission();

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!result.cancelled) {
            this.setState({ user: { ...this.state.user, avatar: result.uri } });
        }
        else{
            this.setState({valid: false})
        }
    };

    handleSelectSelfie = async () => {
        UserCamera.getCameraPermission();

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            this.setState({ user: { ...this.state.user, avatar: result.uri } });
        }
        else{
            this.setState({valid: false})
        }
    };



    render() {

        return (
            <View style={{flex: 1,
            paddingLeft: 15,
            paddingRight: 15}}>

<ImageBackground source={require("./Background1.png")} style={{width: "120%", height: 1000, alignSelf: "center"}}>
                
               <Text style={styles.header}>
                    Add a Profile Pic
               </Text>

               <TouchableOpacity onPress={() => this.validate()} style={styles.button1}>
                   <Text style={styles.btntext}>Next</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => this.validate()}>
                  <Ionicons name='ios-arrow-forward' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 150, left: 157.5}}/>
               </TouchableOpacity>

                <TouchableOpacity style={styles.avatarPlaceholder} onPress={this.handlePickAvatar}>

                        <Image source={{ uri: this.state.user.avatar }} style={styles.avatar} />
                        


                        <Ionicons

                            name="ios-add"

                            size={40}

                            color="#0095d6"

                            style={{ marginTop: 6, marginLeft: 2 }}

                        ></Ionicons>

                </TouchableOpacity>

               
 
                <View style={styles.errorMessage}>

                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}

                </View>
              
                </ImageBackground>
           </View>

        );

    }

}

const Navigator = createStackNavigator({
    Home: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    },
    Choices: {
      screen: ChoicesScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      }
    },
   },
  {
    initialRouteName: 'Home'
  }
  );

const styles = StyleSheet.create({

    header: {

        bottom: -125,

        textAlign: 'center',

        fontSize: 35,

        color: '#fff',

        justifyContent: 'center',

        paddingBottom: 10,

        marginBottom: 40,

        borderBottomColor: '#199187',

        borderBottomWidth: 4,

     },

     header2: {

        bottom: -250,

        textAlign: 'center',

        fontSize: 22.5,

        color: '#fff',

        justifyContent: 'center',

        paddingBottom: 10,

        marginBottom: 40,

        borderBottomColor: '#199187',

        borderBottomWidth: 4,

     },

     btntext: {

        color: '#fff',

        fontSize: 17.5

     },

     button1: {
        bottom: 105,

        left: 125,

        alignSelf: 'stretch',

        alignItems: 'center',

        padding: 20,

        marginTop: 30,

     },

    container: {

        flex: 1

    },

    greeting: {

        marginTop: 32,

        fontSize: 18,

        fontWeight: "500",

        textAlign: "center",

        color: "#FFF"

    },

    form: {

        marginBottom: 48,

        marginHorizontal: 30

    },

    inputTitle: {

        color: "#8A8F9E",

        fontSize: 10,

        textTransform: "uppercase"

    },

    input: {

        borderBottomColor: "#8A8F9E",

        borderBottomWidth: StyleSheet.hairlineWidth,

        height: 40,

        fontSize: 15,

        color: "#161F3D"

    },

    button: {

        marginHorizontal: 30,

        backgroundColor: "#E9446A",

        borderRadius: 4,

        height: 52,

        alignItems: "center",

        justifyContent: "center"

    },

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

        position: "absolute",

        top: 48,

        left: 32,

        width: 32,

        height: 32,

        borderRadius: 16,

        backgroundColor: "rgba(21, 22, 48, 0.1)",

        alignItems: "center",

        justifyContent: "center"

    },

    avatarPlaceholder: {
        
        alignSelf: 'center',

        bottom: 20,

        width: 175,

        height: 175,

        backgroundColor: "#E1E2E6",

        borderRadius: 87.5,

        borderWidth: 3,

        borderColor: 'white',

        marginTop: 48,

        justifyContent: "center",

        alignItems: "center"

    },


    avatar: {

        position: "absolute",

        width: 175,

        height: 175,

        borderRadius: 87.5,

        borderWidth: 3,

        borderColor: 'white',

    }

});

export default createAppContainer(Navigator);