import React,{Component, Fragment} from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../../Second_Screen_Component/HomeScreen';
import ExploreScreen from '../../Second_Screen_Component/ExploreScreen';
import NotificationsScreen from '../../Second_Screen_Component/NotificationsScreen';
import ProfileScreen from '../../Second_Screen_Component/ProfileScreen';
class Starting_Screen extends Component {
    render() { 
        return (
            <AppContainer/>
          );
    }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
<<<<<<< HEAD
          source = {require('../../../assest/Main_Screen/home.png')}
=======
          source = {require('F:/TechnicalArch-main/assest/Main_Screen/home.png')}
>>>>>>> ec01f200e068c75451c7382bd2876f75b5b38b26
          style = {{backgroundColor: tintColor, width:20,height:20}} />
        )
      }
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
<<<<<<< HEAD
          source = {require('../../../assest/Main_Screen/comments.png')}
=======
          source = {require('F:/TechnicalArch-main/assest/Main_Screen/comments.png')}
>>>>>>> ec01f200e068c75451c7382bd2876f75b5b38b26
          style = {{backgroundColor: tintColor, width:20,height:20}} />
        )
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
<<<<<<< HEAD
          source = {require('../../../assest/Main_Screen/search.png')}
=======
          source = {require('F:/TechnicalArch-main/assest/Main_Screen/search.png')}
>>>>>>> ec01f200e068c75451c7382bd2876f75b5b38b26
          style = {{backgroundColor: tintColor, width:20,height:20}} />
          
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
<<<<<<< HEAD
          source = {require('../../../assest/Main_Screen/user.png')}
=======
          source = {require('F:/TechnicalArch-main/assest/Main_Screen/user.png')}
>>>>>>> ec01f200e068c75451c7382bd2876f75b5b38b26
          style = {{backgroundColor: tintColor, width:20,height:20}} />
         
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);


export default Starting_Screen;