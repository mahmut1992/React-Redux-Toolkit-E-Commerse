import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "", // Arama inputundan gelen terimi saklıyoruz
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Kullanıcının girdiği değeri kaydediyoruz
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
