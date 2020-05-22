import "reflect-metadata";
import React, { useState, useCallback } from "react";
import { StatusBar } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { createConnection } from "typeorm/browser";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import store from "./src/redux/store";

import { databaseConfig } from "./src/config/database";

import Routes from "./src/routes";

import theme from "./src/themes/global";

enableScreens();
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const startAsync = useCallback(async () => {
    try {
      await Font.loadAsync({
        Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      });

      await createConnection(databaseConfig);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
    return (
      <AppLoading
        startAsync={startAsync}
        onFinish={() => setIsLoading(false)}
      />
    );
  }

  return (
    <ReduxProvider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.card} />
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </ReduxProvider>
  );
}
