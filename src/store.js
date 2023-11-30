import { configureStore } from "@reduxjs/toolkit";
import customizationReducer from './reducers/customizationReducer';

const store = configureStore({
  reducer: {
    customization: customizationReducer,
    // Add other reducers here if needed
  },
});

export default store;