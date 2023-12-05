import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';



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
      selectedCountry: {},
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
        selectedCountry: {},
        details: '',
        deliveryTerms: '',
        shippingMethod: ''
      }
    },

  },
});

export const { updateFormData, updateFormErrors, addVariation, submitData, resetFormData } = quotationSlice.actions;
export const selectFormData = (state) => state.quotation.formData;
export default quotationSlice.reducer;


export const submitQuotaion = (formData) => async (dispatch) => {
  try {
    await axios.post('https://656ec89b6529ec1c62369fd5.mockapi.io/nys/api/quotation', formData);
    dispatch(resetFormData());
    dispatch(addVariation());
    toast.success('Quotation Request submitted successfully!');
  } catch (error) {
    toast.error('Error Quotation Request. Please try again.');
    // Handle error as needed
  }


};

