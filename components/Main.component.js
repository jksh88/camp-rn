import React, { useState } from 'react';
import Directory from './Directory.component';
import CampsiteInfo from './CampsiteInfo.component';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Home from './Home.component';
import About from './About.component';
import Contact from './Contact.component';
import Reservation from './Reservation.component';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchCampsites,
  fetchComments,
  fetchPartners,
  fetchPromotions,
} from '../redux/ActionCreators';

//createStackNavigator has one required argument called route configs object where we set what components will be available(in this case Directory and CampsiteInfo components)
// https://reactnavigation.org/docs/4.x/headers
//Each screen component in the app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions on the route's router such as
// navigate, goBack, addListener, isFocused, state, setParams

const DirectoryNavigator = createStackNavigator(
  {
    Directory: {
      screen: Directory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="list"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    CampsiteInfo: { screen: CampsiteInfo },
    //doc: Each screen component in your app is provided with the navigation prop automatically.
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
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: (
        <Icon
          name="home"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: (
        <Icon
          name="info-circle"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: { screen: Reservation },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: (
        <Icon
          name="tree"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerLeft: (
        <Icon
          name="address-card"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('./images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>NC</Text>
        </View>
      </View>
      <DrawerItems {...props}></DrawerItems>
    </SafeAreaView>
  </ScrollView>
);
//https://www.npmjs.com/package/react-native-safe-area-view

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Directory: {
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        drawerLabel: 'Make a reservation',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="tree"
            type="font-awesome"
            size={24}
            color={tintColor}
            onPress={() => naviga.toggleDrawer()}
          />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About Us',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="info-circle"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="address-card"
            type="font-awesome"
            size={24}
            color={tintColor}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: '#CEC8FF',
    contentComponent: CustomDrawerContentComponent,
  }
);
//Here, the drawer navigator is the top-level navigator and it contains on the drawer Home and Directory
//After drawer opens, user can navigate to Home or Direcotry by HomeNavigator and MainNavigator, which are stack navigators.

//createAppContainer returns a react component that handles connecting the top-level navigator to the react-native application environment to handle some functions such as responding to a back button in a device.
//App's top-level nagvigator is typically wrapped in createAppContainer like this.
//Here, the execution result of the function is assigned to a constant AppNavigator.
const AppNavigator = createAppContainer(MainNavigator);
//Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API
//to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native.

const Main = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPartners());
    dispatch(fetchCampsites());
    dispatch(fetchComments());
    dispatch(fetchPromotions());
  }, []);
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

//define custom styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#5637DD',
    height: 140,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  drawerImage: { margin: 20, height: 50, width: 50 },
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24,
  },
});

export default Main;
