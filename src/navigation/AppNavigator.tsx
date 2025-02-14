import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { HomeScreen, HotelDetailsScreen } from "../screens";
import { NAVIGATION } from "../constants/navigation";


const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NAVIGATION.HOME} component={HomeScreen} />
        <Stack.Screen name={NAVIGATION.DETAILS} component={HotelDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
