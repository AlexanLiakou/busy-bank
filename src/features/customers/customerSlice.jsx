import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: ''
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID, createdAt) {
        return {
          payload: {fullName, nationalID, createdAt}
        }
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = new Date().toISOString();
      }
    },
    updateCustomer(state, action) {
      state.fullName = action.payload.fullname;
    },
  },
});

export const {createCustomer, updateCustomer} = customerSlice.actions;

export default customerSlice.reducer;