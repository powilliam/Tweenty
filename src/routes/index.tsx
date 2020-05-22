import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Archive from "../screens/Archive";
import CreateTask from "../screens/CreateTask";

const Stack = createStackNavigator();
const Bottom = createMaterialBottomTabNavigator();

function HomeNavigator() {
  const theme = useTheme();

  return (
    <Bottom.Navigator
      activeColor="#F87A85"
      inactiveColor="#999"
      barStyle={{
        backgroundColor: theme.colors.card,
      }}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Bottom.Screen
        name="Archive"
        component={Archive}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="archive" color={color} size={24} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 1,
        },
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}
