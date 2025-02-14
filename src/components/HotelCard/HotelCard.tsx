import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Hotel } from "../../types";
import { styles } from "./styles";


interface HotelCardProps {
  hotel: Hotel;
  onPress: () => void;
}

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: hotel.gallery[0] }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Text style={styles.stars}>⭐ {hotel.stars} Stars</Text>
        <Text style={styles.rating}>User Rating: {hotel.userRating}</Text>
        <Text style={styles.price}>
          {hotel.currency} {hotel.price}/night
        </Text>
      </View>
    </TouchableOpacity>
  );
};
