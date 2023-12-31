import { createSlice } from "@reduxjs/toolkit";


const customizationSlice = createSlice({
  name: 'customization',
  initialState: {
    // Define your initial state here
    selectedProducts: [],
    selectedSize: 'small',
    selectedColor: 'black',
    selectedQuantity: 1,
    selectedVariation: [],
    selectedCountry: '',
    // Add other state properties as needed
  },
  reducers: {
    // Define your actions and reducers here
    setSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    setSelectedQuantity: (state, action) => {
      state.selectedQuantity = action.payload;
    },
    setSelectedVariation: (state, action) => {
      state.selectedVariation = action.payload;
    },
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },

  },
});

export const {
  setSelectedProducts,
  setSelectedSize,
  setSelectedColor,
  setSelectedQuantity,
  setSelectedVariation,
  setSelectedCountry,

  // Export other actions as needed
} = customizationSlice.actions;
export default customizationSlice.reducer;