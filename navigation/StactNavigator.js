import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
//import LinksScreen from '../screens/ProfileScreen';
import DetailScreen from '../screens/DetailScreen';
import VideoCallingDoctorScreen from '../screens/VideoCallingDoctorScreen';
import SpecialistDoctorScreen from '../screens/SpecialistDoctorScreen';
import CovidScreen from '../screens/CovidScreen';

//const HomeStack = createStackNavigator();
const HomeStack  = createSharedElementStackNavigator();

const HomeStackScreen  = () =>(
    <HomeStack.Navigator>
    <HomeStack.Screen
    name = "HomeScreen"
    component  = {HomeScreen}
    options={{
        title: null,
        headerShown: false
    }}
    />
    <HomeStack.Screen
    name = "DetailScreen"
    component  = {DetailScreen}
    options={{
        headerStyle: {
            backgroundColor: '#CCEEFB',
          },
          title: null,
          headerShown: false
    }}
    /*sharedElementsConfig={(route, otherRoute, showing) => {
        const { item } = route.params;
        return [`1`];
      }}*/
    />
    <HomeStack.Screen
    name = "VideoCallingDoctorScreen"
    component  = {VideoCallingDoctorScreen}
    options={{
        title: null,
        headerShown: false,
        tabBarVisible: false
    }}
    />
    <HomeStack.Screen
    name = "SpecialistDoctorScreen"
    component  = {SpecialistDoctorScreen}
    options={{
        title: "cool",
        headerShown: false,
    }}
    />
    <HomeStack.Screen
    name = "CovidScreen"
    component  = {CovidScreen}
    options={{
        title: "cool",
        headerShown: false,
    }}
    />

    </HomeStack.Navigator>

);

export default HomeStackScreen;