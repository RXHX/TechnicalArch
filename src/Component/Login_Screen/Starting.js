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
          source = {require('../../../assest/Main_Screen/home.png')}
          style = {{backgroundColor: tintColor, width:20,height:20}} />
        )
      }
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source = {require('../../../assest/Main_Screen/comments.png')}
          style = {{backgroundColor: tintColor, width:20,height:20}} />
        )
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source = {require('../../../assest/Main_Screen/search.png')}
          style = {{backgroundColor: tintColor, width:20,height:20}} />
          
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image 
          source = {require('../../../assest/Main_Screen/user.png')}
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