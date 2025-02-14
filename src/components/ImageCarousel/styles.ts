import { StyleSheet } from "react-native";
import { screenWidth } from "../../constants/dimensions";
import { HPX } from "../../utils/responsiveness";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: screenWidth,
    height: HPX(250),
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: "gray",
  },
  activeDot: {
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    backgroundColor: colors.black + "80",
    borderRadius: 20,
    padding: 8,
    zIndex: 10,
  },
});
