import { Hotel } from "./index";

export type RootStackParamList = {
    HomeScreen: undefined;
    HotelDetails: { hotelId: number };
  };
  