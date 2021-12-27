import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { createWrapper, HYDRATE } from "next-redux-wrapper";


const slice = createSlice({
  name: "transactionData",
  initialState: {
    account_id: "",
    loading: false,
  },
  reducers: {
    serverdispatched: (state, action) => {
      state.account_id = action.payload;
      console.log("dispatched from server");
      console.log(action);
    },

    clientDispatchedData: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.transactionData,
      };
    },
  },
});

export const { serverdispatched, clientDispatchedData } = slice.actions;
export default slice.reducer;

//Action Creators

export const insertFromServer = createAsyncThunk(
  "users/GetFromServer",
  async (data, { dispatch, getState }) => {
    try {
      console.log("insert From Server");
      console.log(getState());

      dispatch(serverdispatched(data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFromclient = createAsyncThunk(
  "users/GetFromClient",
  async (data, { dispatch, getState }) => {
    try {
      console.log("getFromClient");
      console.log(getState());

      dispatch(clientDispatchedData());
    } catch (error) {
      console.log(error);
    }
  }
);
