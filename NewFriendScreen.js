import React, {Component} from 'react';
import { 
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Alert,
    TouchableHighlight
 } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import {Dimensions, Animated, PanResponder } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Chat from './GiftedChat'

const SCREEN_HEIGHT = Dimensions.get('window').height

const SCREEN_WIDTH = Dimensions.get('window').width

const Users = [
  { id: '1', uri: require('./white1.jpg') },
  { id: '2', uri: require('./hello.jpg') },
  { id: '3', uri: require('./img1.jpg') },
  { id: '4', uri: require('./img2.jpg') },
  { id: '5', uri: require('./image0.jpeg') },
]

class NewFriend extends Component {
  constructor() {
    super()

    this.position = new Animated.ValueXY()

    this.state = {

      currentIndex: 0,

      decider: 0

    }



    this.rotate = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: ['-10deg', '0deg', '10deg'],

      extrapolate: 'clamp'

    })



    this.rotateAndTranslate = {

      transform: [{

        rotate: this.rotate

      },

      ...this.position.getTranslateTransform()

      ]

    }



    this.likeOpacity = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [0, 0, 1],

      extrapolate: 'clamp'

    })

    this.dislikeOpacity = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [1, 0, 0],

      extrapolate: 'clamp'

    })



    this.nextCardOpacity = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [1, 0, 1],

      extrapolate: 'clamp'

    })

    this.nextCardScale = this.position.x.interpolate({

      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],

      outputRange: [1, 0.8, 1],

      extrapolate: 'clamp',
    

    })
 
  }

  decider = () => {
    
    if (this.state.decider == 0){
      this.setState({decider: 1})
    }
     
    if (this.state.decider == 1){
      this.props.navigation.navigate('HeyFrienders')
      this.setState({decider: 2})
    }
       
    if (this.state.decider == 2){
      this.props.navigation.navigate('HeyFrienders2')
      this.setState({decider: 3})
    }

    if (this.state.decider == 3){
      this.props.navigation.navigate('HeyFrienders3')
      this.setState({decider: 4})
    }

  }

  
  decider2 = () => {
    
    if (this.state.decider == 0){
      this.setState({decider: 1})
    }
     
    if (this.state.decider == 1){
      this.setState({decider: 2})
    }
       
    if (this.state.decider == 2){
      this.setState({decider: 3})
    }

    if (this.state.decider == 3){
      this.setState({decider: 4})
    }

  }

  componentWillMount() {

    this.PanResponder = PanResponder.create({



      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {



        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })

      },

      onPanResponderRelease: (evt, gestureState) => {



        if (gestureState.dx > 120) {

          Animated.spring(this.position, {

            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }

          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {

              this.position.setValue({ x: 0, y: 0 })

            })

          })

          this.decider()

        }

        else if (gestureState.dx < -120) {

          Animated.spring(this.position, {

            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }

          }).start(() => {

            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {

              this.position.setValue({ x: 0, y: 0 })

            })

          })

          this.decider2()

        }

        else {

          Animated.spring(this.position, {

            toValue: { x: 0, y: 0 },

            friction: 4

          }).start()

        }

      }

    })

  }

  renderUsers = () => {
    return Users.map((item, i) => {

      if (i < this.state.currentIndex) {
       
        return null

      }

      else if (i == this.state.currentIndex) {
        return (

          <Animated.View
            {...this.PanResponder.panHandlers}

            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>

            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 225, left: 40, zIndex: 1000 }}>

            <Ionicons name='ios-checkmark-circle' size={120} color={'green'}/>

            </Animated.View >

            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 224, left: 65, zIndex: 1000 }}>

            <Ionicons name='ios-checkmark' size={120} color={'white'}/>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 225, right: 40, zIndex: 1000 }}>

            <Ionicons name='ios-close-circle' size={120} color={'red'}/>

            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 224, right: 64, zIndex: 1000 }}>

              <Ionicons name='ios-close' size={120} color={'white'}/>

            </Animated.View>
            
            <Image

              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}

              source={item.uri} />

          </Animated.View>

        )

      }

      else {

        return (

          <Animated.View

            key={item.id} style={[{

              opacity: this.nextCardOpacity,

              transform: [{ scale: this.nextCardScale }],

              height: SCREEN_HEIGHT - 140, width: SCREEN_WIDTH, padding: 10, position: 'absolute'

            }]}>

  <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 225, left: 40, zIndex: 1000 }}>

<Ionicons name='ios-checkmark-circle' size={120} color={'green'}/>

</Animated.View >

<Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 224, left: 65, zIndex: 1000 }}>

<Ionicons name='ios-checkmark' size={120} color={'white'}/>

</Animated.View>

<Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 225, right: 40, zIndex: 1000 }}>

<Ionicons name='ios-close-circle' size={120} color={'red'}/>

</Animated.View>

<Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 224, right: 64, zIndex: 1000 }}>

  <Ionicons name='ios-close' size={120} color={'white'}/>

  </Animated.View>

            <Image

              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}

              source={item.uri} />



          </Animated.View>

        )

      }

    }).reverse()

  }



  render() {

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#00affc' }}>    

        <View style={{ height: 40, bottom: -100}}>

        </View>

        <View style={{ flex: 1}}>

          {this.renderUsers()}
          

        </View>

        <View style={{ height: 60 }}>


        </View>


      </ScrollView>



    );


  }

}

class HeyFriendersScreen extends Component {
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#0095d6'}}>
        <Text style={styles.header}></Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', left: 20, color: "black", fontFamily: 'Verdana', bottom: -135}}>Rama, 17</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -155, fontFamily: 'Verdana'}}>Goal: Study with a Buddy</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -175, fontFamily: 'Verdana'}}>Interests: </Text>

        
        <TouchableHighlight
      style={styles.talk}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-musical-note' size={30} style={{left: 10}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 21, alignSelf: "center", left: 10}}>Music and Dance</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={styles.talk2} 
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-bowtie' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Fashion</Text>
        </View>
    </TouchableHighlight>
        
        <TouchableOpacity style={{alignSelf: 'center', justifyContent: "center", alignItems: "center", color: "grey", bottom: 60, alignSelf: 'flex-end', left: -15}}
        onPress={() => this.props.navigation.navigate('ChattingScreen')}
        >
           <Ionicons style={{color: "#00affc"}} size={40} name='ios-chatbubbles'/>
        </TouchableOpacity>
        <Image source={require('./hello.jpg')} style={{height: 400, width: 375, alignSelf: 'center', bottom: 515}}></Image>


          <Ionicons name='ios-bowtie' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Fashion</Text>


      </View>
    )
  }
}

class HeyFriendersScreen2 extends Component {
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#0095d6'}}>
        <Text style={styles.header}></Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', left: 20, color: "black", fontFamily: 'Verdana', bottom: -135}}>Jamal, 14</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -155, fontFamily: 'Verdana'}}>Goal: Hangout</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -175, fontFamily: 'Verdana'}}>Interests: </Text>

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
          <Ionicons name='ios-headset' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center", left: 10}}>Video Games</Text>
        </View>
    </TouchableHighlight>
        
        <TouchableOpacity style={{alignSelf: 'center', justifyContent: "center", alignItems: "center", color: "grey", bottom: 60, alignSelf: 'flex-end', left: -15}}
        onPress={() => this.props.navigation.navigate('ChattingScreen')}
        >
           <Ionicons style={{color: "#00affc"}} size={40} name='ios-chatbubbles'/>
        </TouchableOpacity>
        <Image source={require('./img1.jpg')} style={{height: 400, width: 375, alignSelf: 'center', bottom: 515}}></Image>


          <Ionicons name='ios-bowtie' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Fashion</Text>


      </View>
    )
  }
}

class HeyFriendersScreen3 extends Component {
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#0095d6'}}>
        <Text style={styles.header}></Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', left: 20, color: "black", fontFamily: 'Verdana', bottom: -135}}>Collin, 15</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -155, fontFamily: 'Verdana'}}>Goal: Lunch Together</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', color: "black", bottom: -175, fontFamily: 'Verdana'}}>Interests: </Text>

      
    <TouchableHighlight
      style={styles.talk}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-brush' size={28} style={{left: 1.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Art and Crafts</Text>
        </View>
    </TouchableHighlight>

    <TouchableHighlight
      style={styles.talk2}
      underlayColor= {'white'}
      >
        <View>
          <Ionicons name='ios-code' size={30} style={{left: 10, bottom: -4}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 22.5, alignSelf: "center", left: 7.5}}>Technology</Text>
        </View>
    </TouchableHighlight>
        
        <TouchableOpacity style={{alignSelf: 'center', justifyContent: "center", alignItems: "center", color: "grey", bottom: 60, alignSelf: 'flex-end', left: -15}}
        onPress={() => this.props.navigation.navigate('ChattingScreen')}
        >
           <Ionicons style={{color: "#00affc"}} size={40} name='ios-chatbubbles'/>
        </TouchableOpacity>
        <Image source={require('./img2.jpg')} style={{height: 400, width: 375, alignSelf: 'center', bottom: 515}}></Image>


          <Ionicons name='ios-bowtie' size={28} style={{left: 7.5, bottom: -2.5}} color={'black'}/>
          <Text style={{color: "black", fontSize: 14, fontWeight: "bold", bottom: 20, alignSelf: "center"}}>Fashion</Text>


      </View>
    )
  }
}

const Navigator = createStackNavigator({
    NewFriendScreen: {
      screen: NewFriend,
      navigationOptions: {
        header: null,
      },
    },
    HeyFrienders: {
      screen: HeyFriendersScreen,
      navigationOptions: {
        header: null
    }
  },
    ChattingScreen:{
      screen: Chat,
      navigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: '#0095d6',
      },
      headerTintColor: "white",
      }
    },
    HeyFrienders2: {
      screen: HeyFriendersScreen2,
      navigationOptions: {
        header: null
      }
  },
  HeyFrienders3: {
    screen: HeyFriendersScreen3,
    navigationOptions: {
      header: null
    }
  },
  },
  {
    initialRouteName: 'NewFriendScreen'
  }
  );
  

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',

  },
  header: {
    borderBottomWidth: 50,
    bottom: -340,
    height: 300,
    width: 200,
    alignSelf: "center",
    borderWidth: 200,
    borderColor: "white",
    left: 12.5
  },
  talk: {
    borderWidth: 2, borderColor: "white", borderRadius: 60, 
    alignSelf: "center", 
    height: 40,
    width: 160,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#00affc',
    bottom: -180,
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
    bottom: -120,
    left: 95
  },

});

export default createAppContainer(Navigator);
