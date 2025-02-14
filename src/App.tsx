import React from "react";
import { AppNavigator } from "./navigation/AppNavigator";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
LogBox.ignoreAllLogs();

export const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
