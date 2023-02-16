import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',

  initialState: {
    borders: [],
    devices: [],
    backgrounds: []
  },

  reducers: {
    initData(state, action) {
      state.borders = [...action.payload.borders]
      state.devices = [...action.payload.devices]
      state.backgrounds = [...action.payload.backgrounds]
    },

    activeBorder(state, action) {
      for (let i = 0; i < state.borders.length; i++) {
        state.borders[i].active = state.borders[i].id === action.payload.id; 
      }
    },

    activeDevice(state, action) {
      for (let i = 0; i < state.devices.length; i++) {
        state.devices[i].active = state.devices[i].id === action.payload.id; 
      }
    },

    activeBackground(state, action) {
      for (let i = 0; i < state.backgrounds.length; i++) {
        state.backgrounds[i].active = state.backgrounds[i].id === action.payload.id;        
      }
    }
  }
});

export const {initData, activeBorder, 
  activeBackground, activeDevice } = dataSlice.actions;

export default dataSlice.reducer;