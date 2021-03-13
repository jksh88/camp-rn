import React, { useState } from 'react';
import Directory from './Directory.component';
import CampsiteInfo from './CampsiteInfo.component';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Home from './Home.component';
import About from './About.component';
import Contact from './Contact.component';

//createStackNavigator has one required argument called route configs object where we set what components will be available(in this case Directory and CampsiteInfo components)
// https://reactnavigation.org/docs/4.x/headers
//Each screen component in the app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions on the route's router such as
// navigate, goBack, addListener, isFocused, state, setParams
const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
    //Each screen component in your app is provided with the navigation prop automatically.
  },
  {
    initialRouteName: 'Directory',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator },
    About: { screen: AboutNavigator },
    Contact: { screen: ContactNavigator },
  },
  {
    drawerBackgroundColor: '#CEC8FF',
  }
);
//Here, the drawer navigator is the top-level navigator and it contains on the drawer Home and Directory
//After drawer opens, user can navigate to Home or Direcotry by HomeNavigator and MainNavigator, which are stack navigators.

//createAppContainer returns a react component that handles connecting the top-level navigator to the react-native application environment to handle some functions such as responding to a back button in a device.
//App's top-level nagvigator is typically wrapped in createAppContainer like this.
//Here, the execution result of the function is assigned to a constant AppNavigator.
const AppNavigator = createAppContainer(MainNavigator);

const Main = (props) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.StatusBarHeight,
      }}
    >
      <AppNavigator />
    </View>
  );
};

export default Main;
