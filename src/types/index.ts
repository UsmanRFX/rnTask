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
  