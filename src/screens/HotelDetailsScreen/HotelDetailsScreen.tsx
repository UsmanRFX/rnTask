import { RouteProp, useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { ImageCarousel, Rating } from "../../components";
import { RootStackParamList } from "../../types/navigation";

export const HotelDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "HotelDetails">>();
  const { hotel } = route.params;

  const details = {
    Address: `${hotel.location.address}, ${hotel.location.city}`,
    "User Rating": hotel.userRating,
    Price: `${hotel.currency} ${hotel.price}/night`,
    "Phone Number": hotel.contact.phoneNumber,
    Email: hotel.contact.email,
    "Check-in": `${hotel.checkIn.from} - ${hotel.checkIn.to}`,
    "Check-out": `${hotel.checkOut.from} - ${hotel.checkOut.to}`,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageCarousel images={hotel.gallery} />
      <View style={styles.content}>
        <Text style={styles.name}>{hotel.name}</Text>
        <Rating value={hotel.stars} />

        {Object.entries(details).map(([label, value]) => (
          <Text key={label} style={styles.detail}>
            <Text style={styles.label}>{label}:</Text> {value}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};
