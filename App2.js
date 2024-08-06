import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import DirectMessage from './DirectMessageScreen';
import NewFriendScreen from './NewFriendScreen.js';
import ProfileScreen from './ProfileScreen.js'

const TabNavigator = createBottomTabNavigator({
    Find: {
        screen: NewFriendScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => 
                  <Ionicons name='ios-search' size={35} color={tintColor}/>
        }
    },
    Messages: {
      screen: DirectMessage,
      navigationOptions: {
          tabBarIcon: ({tintColor}) => 
                <Ionicons style={{color: tintColor}} size={35} name='ios-chatboxes'/>
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
          tabBarIcon: ({tintColor}) => 
                <Ionicons style={{color: tintColor}} size={35} name='ios-person'/>
      }
    }

  },
  {
    tabBarOptions: {
      activeTintColor: '#00affc',
      inactiveTintColor: 'grey',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
    }
  },
)


export default createAppContainer(TabNavigator);