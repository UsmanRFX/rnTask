import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
});
