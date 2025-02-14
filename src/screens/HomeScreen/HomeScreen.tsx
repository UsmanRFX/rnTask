import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { fetchHotels } from "../../api/hotelApi";
import { Hotel } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { HotelCard } from "../../components";



type RootStackParamList = {
  Home: undefined;
  HotelDetails: { hotel: Hotel };
};

export const HomeScreen = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const goto = (item)=>{
    // {
    //     "checkIn": {
    //       "from": "12:00",
    //       "to": "20:00"
    //     },
    //     "checkOut": {
    //       "from": "07:00",
    //       "to": "10:00"
    //     },
    //     "contact": {
    //       "email": "belgrave@gmail.com",
    //       "phoneNumber": "+44 5477432"
    //     },
    //     "currency": "EUR",
    //     "gallery": [
    //       "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584265/g8wzbaqahffteguzal5d.jpg",
    //       "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584267/zvpg4qui6pqp6t9lzmfz.jpg",
    //       "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1602584269/storgpwbactbomqnevn5.jpg",
    //       "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_26_7_mdxypk.jpg",
    //       "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054438/Living_Area_25_6_rkyqhx.jpg",
    //       "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_31_9_s2va2b.jpg",
    //       "https://res.cloudinary.com/lastminute/image/upload/t_OSE_redes_item_view/v1491054437/Guestroom_32_4_rpuq3s.jpg"
    //     ],
    //     "id": 12322,
    //     "location": {
    //       "address": "28-32 Belgrave Road Victoria",
    //       "city": "London",
    //       "latitude": 51.49241,
    //       "longitude": -0.14283
    //     },
    //     "name": "Belgrave House Hotel",
    //     "price": 100,
    //     "stars": 4,
    //     "userRating": 7.8
    //   }
    navigation.navigate("HotelDetails", { hotel: item })
  }

  return (
    <View style={styles.container}>


      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HotelCard hotel={item} onPress={()=>goto(item)} />
        )}
      />
    </View>
  );
};
