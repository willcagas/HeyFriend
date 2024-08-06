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

export default class Terms extends Component {
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


const styles = StyleSheet.create({
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
    }
})
