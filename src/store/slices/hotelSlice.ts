import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Hotel } from "../../types";
import { fetchHotels as fetchHotelsApi } from "../../api/hotelApi";
import { AppError } from "../../utils/errorHandler";

export interface HotelState {
  hotels: Hotel[];
  filteredHotels: Hotel[];
  loading: boolean;
  error: string | null;
  sortBy: "price" | "stars" | "rating" | null;
}

const initialState: HotelState = {
  hotels: [],
  filteredHotels: [],
  loading: false,
  error: null,
  sortBy: null,
};

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchHotelsApi();
      return data;
    } catch (err) {
      if (err instanceof AppError) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<HotelState["sortBy"]>) => {
      state.sortBy = action.payload;
      hotelSlice.caseReducers.sortHotels(state);
    },
    sortHotels: (state) => {
      if (!state.sortBy) return;
      state.filteredHotels = [...state.filteredHotels].sort((a, b) => {
        if (state.sortBy === "price") return a.price - b.price;
        if (state.sortBy === "stars") return b.stars - a.stars;
        if (state.sortBy === "rating") return b.userRating - a.userRating;
        return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchHotels.fulfilled,
        (state, action: PayloadAction<Hotel[]>) => {
          state.loading = false;
          state.hotels = action.payload;
          state.filteredHotels = action.payload;
        }
      )
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSortBy } = hotelSlice.actions;
export default hotelSlice.reducer;
