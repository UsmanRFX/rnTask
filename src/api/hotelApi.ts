import apiClient from './client';
import { API_ENDPOINTS } from './config';

export interface Location {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface CheckInOut {
  from: string;
  to: string;
}

export interface Contact {
  phoneNumber: string;
  email: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: Location;
  stars: number;
  checkIn: CheckInOut;
  checkOut: CheckInOut;
  contact: Contact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}

export const fetchHotels = async (): Promise<Hotel[]> => {
  try {
    const response = await apiClient.get<Hotel[]>(API_ENDPOINTS.HOTELS);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};
