import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Alert,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { fetchHotels } from "../../api/hotelApi";
import { AppError } from "../../utils/errorHandler";
import { HotelCard, CustomPicker } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Hotel } from "../../types";
import { colors } from "../../theme/colors";
import { NAVIGATION } from "../../constants/navigation";

export const HomeScreen = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goto = (item: Hotel) =>
    navigation.navigate(NAVIGATION.DETAILS, { hotel: item });

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
        setFilteredHotels(data);
      } catch (err) {
        let errorMessage = "An unexpected error occurred.";
        if (err instanceof AppError) errorMessage = err.message;
        Alert.alert("Error", errorMessage, [{ text: "OK" }]);
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, []);

  // Sort hotels when sortBy changes
  useEffect(() => {
    let sortedHotels = [...filteredHotels];

    if (sortBy === "price") {
      sortedHotels.sort((a, b) => a.price - b.price);
    } else if (sortBy === "stars") {
      sortedHotels.sort((a, b) => b.stars - a.stars);
    } else if (sortBy === "rating") {
      sortedHotels.sort((a, b) => b.userRating - a.userRating);
    }

    setFilteredHotels(sortedHotels);
  }, [sortBy]);

  if (loading) return <ActivityIndicator size="large" color={colors.primary} />;

  return (
    <SafeAreaView style={styles.container}>
      <CustomPicker
        selectedValue={sortBy}
        onValueChange={setSortBy}
        options={[
          { label: "Sort by", value: "" },
          { label: "Price (Low to High)", value: "price" },
          { label: "Stars (High to Low)", value: "stars" },
          { label: "User Rating (High to Low)", value: "rating" },
        ]}
      />

      <FlatList
        data={filteredHotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HotelCard hotel={item} onPress={() => goto(item)} />
        )}
      />
    </SafeAreaView>
  );
};
