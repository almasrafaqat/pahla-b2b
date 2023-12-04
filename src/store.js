import { configureStore } from "@reduxjs/toolkit";
import customizationReducer from './reducers/customizationReducer';
import quotationReducer from "./reducers/quotationReducer";

const store = configureStore({
  reducer: {
    customization: customizationReducer,
    quotation: quotationReducer,
    // Add other reducers here if needed
  },
});

export default store;