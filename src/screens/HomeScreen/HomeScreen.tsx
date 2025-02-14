import React, { useEffect } from "react";
import {  ActivityIndicator, FlatList, Alert, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { HotelCard, CustomPicker } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, fetchHotels, HotelState, RootState, setSortBy } from "../../store";
import { NAVIGATION } from "../../constants/navigation";
import { colors } from "../../theme/colors";

export const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { filteredHotels, loading, error, sortBy } = useSelector(
    (state: RootState) => state.hotels
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error, [{ text: "OK" }]);
    }
  }, [error]);

  const goto = (hotel: any) => navigation.navigate(NAVIGATION.DETAILS, { hotel });

  if (loading) return <ActivityIndicator size="large" color={colors.primary} />;

  return (
    <SafeAreaView style={styles.container}>
      <CustomPicker
        selectedValue={sortBy || ""}
        onValueChange={(value) => dispatch(setSortBy(value as HotelState["sortBy"]))}

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
        renderItem={({ item }) => <HotelCard hotel={item} onPress={() => goto(item)} />}
      />
    </SafeAreaView>
  );
};
