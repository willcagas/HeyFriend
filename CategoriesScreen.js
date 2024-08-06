import React, {Component} from 'react';
import { 
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Alert,
    TouchableHighlight
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RulesScreen from './App2.js';
import * as firebase from "firebase";
import { Ionicons } from '@expo/vector-icons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       matchmake: 0,
       buttonColor: "#00affc",
       buttonColor2: "#00affc",
       buttonColor3: "#00affc",
       buttonColor4: "#00affc",
       buttonColor5: "#00affc",
       buttonColor6: "#00affc",
       buttonColor7: "#00affc",
       buttonColor8: "#00affc"
    }
    this.onButtonPress=this.onButtonPress.bind(this);
    this.onButtonPress2=this.onButtonPress2.bind(this);
  }
 

onButtonPress(){
  this.setState({ buttonColor: 'blue' });
}

onButtonPress2(){
  this.setState({ buttonColor2: 'blue' });
}

onButtonPress3(){
  this.setState({ buttonColor2: 'blue' });
}

onButtonPress4(){
  this.setState({ buttonColor2: 'blue' });
}

onButtonPress5(){
  this.setState({ buttonColor2: 'blue' });
}

onButtonPress6(){
  this.setState({ buttonColor2: 'blue' });
}

onButtonPress7(){
  this.setState({ buttonColor2: 'blue' });
}

onButtonPress8(){
  this.setState({ buttonColor2: 'blue' });
}

  matchmakeFunc = () => {
    firebase
      .database()
      .ref('UserList/Interests/')
      .on("value", function(Datasnapshot) {
     Alert.alert(Datasnapshot.val())
  }, function (error) {
     console.log("Error: " + error.code);
  })
}

validate = () => {
  const {buttonColor, buttonColor2, buttonColor3, buttonColor4, buttonColor5, buttonColor6, buttonColor7, buttonColor8} = this.state
  if (buttonColor == "00affc", buttonColor2 == "00affc", buttonColor3 == "00affc", buttonColor4 == "00affc", buttonColor5 == "00affc", buttonColor6 == "00affc", buttonColor7 == "00affc", buttonColor8 == "00affc")
    {
      Alert.alert(
        'Oops...',
        'Please select at least one of the interests',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      )
      return false
    }
  else {
    this.handleUser()
    this.props.navigation.navigate('Rules')
  }
}

handleUser = () => {
  const {buttonColor, buttonColor2, buttonColor3, buttonColor4, buttonColor5, buttonColor6, buttonColor7, buttonColor8} = this.state
  if (buttonColor == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Arts and Crafts",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
  if (buttonColor2 == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Sports and Fitness",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
  if (buttonColor3 == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Music and Dance",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
  if (buttonColor4 == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Technology",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
  if (buttonColor5 == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Video Games",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }

  if (buttonColor6 == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Fashion",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
  if (buttonColor7 == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Movies",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
  if (buttonColor8 == "white") {
    firebase
    .database()
    .ref('UserList/' )
    .push({
        interest: "Food and Drink",
    }
    ).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
  }
}

checker = () => {
  if (this.state.buttonColor == "#00affc"){
    this.setState({buttonColor: "white"})
  }
  else if (this.state.buttonColor == "white"){
    this.setState({buttonColor: "#00affc"})
  }
}

checker2 = () => {
  if (this.state.buttonColor2 == "#00affc"){
    this.setState({buttonColor2: "white"})
  }
  else if (this.state.buttonColor2 == "white"){
    this.setState({buttonColor2: "#00affc"})
  }
}

checker3 = () => {
  if (this.state.buttonColor3 == "#00affc"){
    this.setState({buttonColor3: "white"})
  }
  else if (this.state.buttonColor3 == "white"){
    this.setState({buttonColor3: "#00affc"})
  }
}

checker4 = () => {
  if (this.state.buttonColor4 == "#00affc"){
    this.setState({buttonColor4: "white"})
  }
  else if (this.state.buttonColor4 == "white"){
    this.setState({buttonColor4: "#00affc"})
  }
}

checker5 = () => {
  if (this.state.buttonColor5 == "#00affc"){
    this.setState({buttonColor5: "white"})
  }
  else if (this.state.buttonColor5 == "white"){
    this.setState({buttonColor5: "#00affc"})
  }
}

checker6 = () => {
  if (this.state.buttonColor6 == "#00affc"){
    this.setState({buttonColor6: "white"})
  }
  else if (this.state.buttonColor6 == "white"){
    this.setState({buttonColor6: "#00affc"})
  }
}

checker7 = () => {
  if (this.state.buttonColor7 == "#00affc"){
    this.setState({buttonColor7: "white"})
  }
  else if (this.state.buttonColor7 == "white"){
    this.setState({buttonColor7: "#00affc"})
  }
}

checker8 = () => {
  if (this.state.buttonColor8 == "#00affc"){
    this.setState({buttonColor8: "white"})
  }
  else if (this.state.buttonColor8 == "white"){
    this.setState({buttonColor8: "#00affc"})
  }
}

valueFunc = () => {
    this.matchmakeFunc()
    this.props.navigation.navigate('App2Screen')
}

valueFunc2 = () => {
    this.writeUserInterest2();
    this.props.navigation.navigate('App2Screen')
}

valueFunc3 = () => {
    this.writeUserInterest3();
    this.props.navigation.navigate('App2Screen')

}

writeUserInterest = () => {
  firebase.database().ref('UserList/Interests/').push(
      'Art'
).then((data)=>{
      //success callback
      console.log('data ' , data)
}).catch((error)=>{
      //error callback
      console.log('error ' , error)
})
}

writeUserInterest2 = () =>{
  firebase.database().ref('UserList/Interests').push(
      'Games'
).then((data)=>{
      //success callback
      console.log('data ' , data)
}).catch((error)=>{
      //error callback
      console.log('error ' , error)
})
}

writeUserInterest3 = () =>{
  firebase.database().ref('UserList/Interests').push(
      'Music'
).then((data)=>{
      //success callback
      console.log('data ' , data)
}).catch((error)=>{
      //error callback
      console.log('error ' , error)
})
}

     render() {
        return(

            <View>

        <Image
        style={{
          alignSelf: 'center',
          width: 375,
          height: 800,
          bottom: 125
        }}
        source={require('./7.png')}
      />

    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-brush' size={28} style={{left: 1.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Art and Crafts</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor2}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker2()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-football' size={26} style={{left: 1.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, left: 25}}>Sports and Fitness</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor3}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker3()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-musical-note' size={30} style={{left: 10}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 21, alignSelf: "center", left: 10}}>Music and Dance</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor4}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker4()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-code' size={30} style={{left: 10, bottom: -4}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 22.5, alignSelf: "center", left: 7.5}}>Technology</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor5}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker5()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-headset' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center", left: 10}}>Video Games</Text>
        </View>
    </TouchableHighlight>

    
    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor6}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker6()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-bowtie' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Fashion</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor7}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker7()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-tv' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Movies</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={[styles.talk, { backgroundColor: this.state.buttonColor8}]} //Or if don't want "backgroundColor:" and just need change the text color use => "color:""
      onPress={() => this.checker8()}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-cafe' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, left: 35}}>Food and Drink</Text>
        </View>
    </TouchableHighlight>

    <TouchableOpacity style={styles.button}
               onPress={() => this.validate()}>
                   <Text style={styles.btntext}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.validate()}>
            <Ionicons name='ios-arrow-forward' size={30} color={'#fff'} style={{alignSelf: 'center', bottom: 1345, left: 157.5}}/>
        </TouchableOpacity>

    </View>
    
        );

     }
    }
 
const Navigator = createStackNavigator({
        Home2: {
          screen: App,
          navigationOptions: {
              header: null
          }
        },
        Rules: {
            screen: RulesScreen,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
              
            }
        }
});

const styles = StyleSheet.create({
    header: {
        bottom: -10,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        justifyContent: 'center',
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 4,
      
      },
    talk: {
      borderWidth: 2, borderColor: "white", borderRadius: 60, 
      bottom: 650, alignSelf: "center", 
      height: 40,
      width: 160,
      marginBottom: 10,
      marginTop: 10,
    },
    Image1: {
        bottom: -25,
        width: "100%",
        height: 200,
    },
    Image2: {
        bottom: -50,
        width: "100%",
        height: 200,
    },
    Image3: {
        bottom: -75,
        width: "100%",
        height: 200,
    },
    Image4: {
        bottom: -100,
        width: "100%",
        height: 200,
    },
    Image5: {
        bottom: -125,
        width: "100%",
        height: 200,
    },
    Image6: {
        bottom: -150,
        width: "100%",
        height: 200,
    },
    scrollView: { 
        marginHorizontal: 20,
    },
    button: {
      bottom: 1300,
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
});

export default createAppContainer(Navigator);