import React, { useContext } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ThemeContext } from "styled-components";

import CreateTask from "../screens/CreateTask";

import Tabs from "./tabs";

const Stack = createStackNavigator();

export default function Routes() {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: theme.cardColor,
        },
        headerTitleStyle: { fontSize: 22 },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{
          title: "Tweenty",
          headerTitleStyle: { fontFamily: "Poppins-Light" },
        }}
      />
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
        options={{
          title: "Create a task",
          headerStyle: {
            elevation: 2,
          },
        }}
      />
    </Stack.Navigator>
  );
}
