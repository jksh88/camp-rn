import React, { useState } from 'react';
import Directory from './Directory.component';
import CampsiteInfo from './CampsiteInfo.component';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
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

const AppNavigator = createAppContainer(DirectoryNavigator);

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
