import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ThemeContext } from "styled-components";

import Home from "../screens/Home";
import Archive from "../screens/Archive";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  const theme = useContext(ThemeContext);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.textColor,
        inactiveTintColor: theme.subtextColor,
        indicatorStyle: {
          backgroundColor: theme.textColor,
        },
      }}
    >
      <Tab.Screen
        name="Progress"
        component={Home}
        options={{
          title: "In progress",
        }}
      />
      <Tab.Screen
        name="Archive"
        component={Archive}
        options={{ title: "Archived" }}
      />
    </Tab.Navigator>
  );
}
