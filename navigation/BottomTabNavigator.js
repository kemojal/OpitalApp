import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from "./StactNavigator";
import CovidScreen from '../screens/CovidScreen';



const BottomTab = createBottomTabNavigator();
//const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator() {
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  //navigation.setOptions({ headerTitle: null });
 

  return (
    <BottomTab.Navigator 
    tabBarOptions ={
      {
        activeTintColor: '#FF0867',
        style:{
          borderRadius: 22,
        }
      }
    }
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          title: 'Today',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-today" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-filing" />,
        }}
      />
      <BottomTab.Screen
        name="Trace"
        component={CovidScreen}
        options={{
          title: 'Trace',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-git-network" />,
        }}
      />
    </BottomTab.Navigator>
  );
}