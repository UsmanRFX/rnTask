import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Alert,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { fetchHotels } from "../../api/hotelApi";
import { AppError } from "../../utils/errorHandler";
import { HotelCard } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Hotel } from "../../types";
import { colors } from "../../theme/colors";

export const HomeScreen = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const goto = (item: Hotel) =>
    navigation.navigate("HotelDetails", { hotel: item });
  useEffect(() => {
    const loadHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (err) {
        let errorMessage = "An unexpected error occurred.";

        if (err instanceof AppError) {
          errorMessage = err.message;
        }

        Alert.alert("Error", errorMessage, [{ text: "OK" }]);
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, []);

  if (loading) return <ActivityIndicator size="large" color={colors.primary} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HotelCard hotel={item} onPress={() => goto(item)} />
        )}
      />
    </SafeAreaView>
  );
};
