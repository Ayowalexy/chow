import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify'


export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data: any, thunkAPI) => {
    console.log(data);
    try {
      const response = await axios(`${process.env.NX_BASE_URL}/users`, {
        method: 'post',
        data: data,
        headers: {
          "Content-Type": "application/json"
        }
      })
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log("error.response", error.response.data.message)
        const mss = error.response.data.message

        toast(mss === 'User exists' ? 'You have joined the waitlist with this email already, stay tuned for updates': 'An error occured, try again')
       
        return thunkAPI.rejectWithValue(mss);
      } else {
        return thunkAPI.rejectWithValue(String(error));
      }
    }
  }
);
