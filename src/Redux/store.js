import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './orderSlice';
import dataReducer from './dataSlice';

export default configureStore(
  {
    reducer: {
      order: orderReducer,
      data: dataReducer
    }
  }
);