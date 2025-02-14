import React from "react";
import { AppNavigator } from "./navigation/AppNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

export const App = () => {
  return <AppNavigator />;
};
