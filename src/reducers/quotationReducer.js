import { createSlice } from "@reduxjs/toolkit";


const quotationSlice = createSlice({
  name: 'quotation',
  initialState: {
    formData: {
      name: '',
      email: '',
      phone: '',
      color: '',
      size: '',
      quantity: 1,
      city: '',
      selectedProducts: [],
      selectedCountry: [],
      details: '',
      deliveryTerms: '',
      shippingMethod: ''

    },
    selectedVariation: [],
    formErrors: {
      name: '',
      email: '',
      phone: '',
      isVariaton: '',
    },
    submittedData: null,
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    updateFormErrors: (state, action) => {
      state.formErrors = action.payload;
    },
    addVariation: (state, action) => {
      state.selectedVariation = action.payload;
    },
    submitData: (state, action) => {
      state.submittedData = action.payload;
    },
    resetFormData: (state) => {
      state.formData = {
        name: '',
        email: '',
        phone: '',
        color: '',
        size: '',
        quantity: 1,
        city: '',
        selectedProducts: [],
        selectedCountry: [],
        details: '',
        deliveryTerms: '',
        shippingMethod: ''
      }
    },

  },
});

export const { updateFormData, updateFormErrors, addVariation, submitData, resetFormData } = quotationSlice.actions;
export default quotationSlice.reducer;