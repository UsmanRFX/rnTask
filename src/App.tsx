import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { HotelDetailsScreen } from "./screens/HotelDetailsScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HotelDetails" component={HotelDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
