import { RouteProp, useRoute } from "@react-navigation/native";
import { ScrollView, Text, View, Image } from "react-native";
import { styles } from "./styles";
import { ImageCarousel, Rating } from "../../components";
import { RootStackParamList } from "../../types/navigation";



export const HotelDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "HotelDetails">>();
  const { hotel } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageCarousel images={hotel.gallery} />
      <View style={styles.content}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Rating stars={hotel.stars} />
        <Text style={styles.address}>
          {hotel.location.address}, {hotel.location.city}
        </Text>
        <Text style={styles.rating}>User Rating: {hotel.userRating}</Text>
        <Text style={styles.price}>
          Price: {hotel.currency} {hotel.price}/night
        </Text>
        <Text style={styles.contact}>Phone: {hotel.contact.phoneNumber}</Text>
        <Text style={styles.contact}>Email: {hotel.contact.email}</Text>
        <Text style={styles.checkInOut}>
          Check-in: {hotel.checkIn.from} - {hotel.checkIn.to}
        </Text>
        <Text style={styles.checkInOut}>
          Check-out: {hotel.checkOut.from} - {hotel.checkOut.to}
        </Text>
      </View>
    </ScrollView>
  );
};
