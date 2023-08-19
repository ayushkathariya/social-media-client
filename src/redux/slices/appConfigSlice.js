import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const getMyProfile = createAsyncThunk(
  "user/getMyProfile",
  async (body, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axiosClient.get("/user/getMyProfile");
      return response.result.curUser;
    } catch (error) {
      return Promise.reject(error);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

const appConfigSlice = createSlice({
  name: "appConfigSlice",
  initialState: {
    isLoading: false,
    toastData: {},
    myProfile: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action) => {
      state.toastData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMyProfile.fulfilled, (state, action) => {
      state.myProfile = action.payload;
    });
  },
});

export default appConfigSlice.reducer;

export const { setLoading, showToast } = appConfigSlice.actions;
