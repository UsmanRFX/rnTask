import React, { useEffect, useState, useCallback } from "react";
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { Hotel } from "../../types";
import { colors } from "../../theme/colors";
import { NAVIGATION, STRINGS } from "../../constants";


export const HomeScreen = () => {
  const [hotels, setHotels] = useState([] as Hotel[]);
  const [loading, setLoading] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goto = useCallback(
    (hotel: Hotel) => navigation.navigate(NAVIGATION.DETAILS, { hotel }),
    [navigation]
  );

  useEffect(() => {
    const loadHotels = async () => {
      try {
        setLoading(true);
        const data = await fetchHotels();
        setHotels(data);
      } catch (err) {
        const errorMessage =
          err instanceof AppError ? err.message : STRINGS.ERROR_UNKNOWN;
        Alert.alert(STRINGS.ERROR_TITLE, errorMessage, [{ text: STRINGS.OK }]);
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <HotelCard hotel={item} onPress={() => goto(item)} />}
        ListEmptyComponent={<Text style={styles.emptyText}>{STRINGS.NO_HOTELS_AVAILABLE}</Text>}
      />
    </SafeAreaView>
  );
};
