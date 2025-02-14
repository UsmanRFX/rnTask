import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.accent,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 8,
  },
  contact: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  checkInOut: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.text,
    marginBottom: 4,
  },
});
