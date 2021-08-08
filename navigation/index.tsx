/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import {View, Text} from "react-native";

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";
import {Feather, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons} from "@expo/vector-icons";

import ChatRoomScreens from "../screens/ChatRoom";
import ContactScreen from "../screens/ContactScreen";
import FleetScreen from "../screens/FleetScreen";
import UselessTextInput from "../components/EditProfile";
import ExploreScreen from "../screens/ExploreScreen";
import CreatePost from "../screens/CreatePost";


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
//root header shows all top navs
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: Colors.light.tint,
            shadowOpacity: 0,
            elevation: 0,
        },

        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }}>
      <Stack.Screen name="Root"
                    component={BottomTabNavigator}
                    options={{
                        title: "Loops",
                        headerRight: () => (
                            <View style={{
                                flexDirection:'row',
                        width: 60, justifyContent: 'space-between', marginRight: 10, }} >
                                <Octicons name="search" size={24} color={'white'} />
                                <Feather name="menu" size={24} color="white" />
                            </View>

                        )
                    }}

      />
        <Stack.Screen
            name="Storys"
            component={FleetScreen}

        />



        <Stack.Screen
            name="Messages"
            component={ChatRoomScreens}
            options={({ route })  => {
                return {
                    title: route.params.name,
                    tabBarVisible: false,
                    headerRight: () => <View style={{
                            flexDirection: 'row',
                            width: 100,
                            justifyContent: 'space-between',
                            marginRight: 10,
                        }}>
                            <FontAwesome5 name="video" size={22} color={'white'}/>
                            <MaterialIcons name="call" size={22} color={'white'}/>
                            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'}/>
                        </View>
                };
            }}
        />
        <Stack.Screen
            name="Contacts"
            component={ContactScreen}

        />
        <Stack.Screen
            name="UpdateProfile"
            component={ContactScreen}

        />

        <Stack.Screen
            name="ProfileSettings"
            component={UselessTextInput}

        />
        <Stack.Screen
            name="CreatePost"
            component={CreatePost}

        />


        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
