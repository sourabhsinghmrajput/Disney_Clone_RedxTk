import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSignIn: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    onSignOut: (state) => {
      state.username = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { onSignIn, onSignOut } = userSlice.actions;
export default userSlice.reducer;
