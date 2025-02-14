import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stars: {
    fontSize: 14,
    color: "#777",
  },
  rating: {
    fontSize: 14,
    color: "#777",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
