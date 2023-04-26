import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "./thunkAction";

interface IState {
  loading: "failed" | "pending" | "successful" | "idle",
}


const initialState: IState = {
  loading: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      return { ...state, loading: "pending" };
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      return {
        ...state,
        loading: "successful"
      };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      return { ...state, loading: "failed" };
    });


  },
});
export const authReducer = authSlice.reducer;
