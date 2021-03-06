/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Fontisto, Ionicons, MaterialIcons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CameraScreen from '../screens/Camera/';
import ChatScreen from '../screens/ChatScreen';
import { BottomTabParamList, CameraScreenList, TabTwoParamList } from '../types';
import UserProfileScreen from "../screens/UserProfileScreen";

import PostView from "../components/Post";
import PostScreen from "../screens/PostScreen";
import CreatePost from "../screens/CreatePost";
import ExploreScreen from "../screens/ExploreScreen";

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background ,
          style: {
          backgroundColor: Colors[colorScheme].tint

      },
      indicatorStyle: {
      backGroundColor: Colors[colorScheme].background, height: 5,
      },
          showIcon: true,



      }}>
      <BottomTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20} />,
            tabBarLabel: () => null,



        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatScreen}

      />
        <BottomTab.Screen
            name="Explore"
            component={ExploreScreen}

        />
        <BottomTab.Screen
            name="Profile"
            component={UserProfileScreen}


        />
        <BottomTab.Screen
            name="Post"
            component={PostScreen}

        />

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<CameraScreenList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={CameraScreen}
        options={{ headerShown: false,}}

      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={ChatScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}


