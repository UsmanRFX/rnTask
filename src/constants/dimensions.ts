import { Platform } from "react-native";
import { StatusBar } from "react-native";
import { Dimensions } from "react-native";
import { HPX } from "../utils/responsiveness";
// import { HPX } from "../utils/responsiveness";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;
export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === "ios" ? HPX(44) : HPX(56);
