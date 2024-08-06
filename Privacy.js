import React, {Component} from 'react';
import { 
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
 } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

 export default class app extends Component {
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
                <Text>
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
        fontSize: 15,
        bottom: 15
    }
})