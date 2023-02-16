import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  
  name: 'order',
  
  initialState: {
    border: {},
    device: {},
    background: {}
  },
  
  reducers: {
    setBorder(state, action) {
      const border = {...action.payload}
      delete border['active'];
      state.border = border;
    },

    setDevice(state, action) {
      const device = {...action.payload}
      delete device['active'];
      state.device = device;
    },

    setBackground(state, action) {
      const background = {...action.payload}
      delete background['active'];
      state.background = background;
    }
  }
});

export const {setBorder, setDevice, setBackground} = orderSlice.actions;

export default orderSlice.reducer;
