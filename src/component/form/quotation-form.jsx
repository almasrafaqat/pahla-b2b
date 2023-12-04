import React from 'react'
import {
  TextField,
  Button,
  Grid,
  Chip,
  Avatar,
  Autocomplete,
  MenuItem,
  InputLabel,
  FormControl,
  Select


} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, updateFormErrors, submitData, addVariation, resetFormData } from '../../reducers/quotationReducer';
import CountrySelect from '../country-list/country-list.component';
import { parsePhoneNumber } from 'libphonenumber-js';



const CustomTextField = ({ label, value, onChange, type = 'text', validation, ...rest }) => (
  <FormControl fullWidth>
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
      variant="outlined"
      fullWidth
      sx={{ marginTop: 2 }}
    />
    <label style={{ margin: 5, color: 'red' }}>{validation}</label>
  </FormControl>
)

const CustomDropdown = ({ label, value, validation, onChange, options, multiple, renderValue }) => {
  return (
    <FormControl fullWidth style={{ marginTop: 20 }}>
      <InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label.toLowerCase()}-label`}
        value={value}
        label={label}
        onChange={onChange}
        multiple={multiple}
        renderValue={renderValue}

      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <p style={{ marginTop: 2, color: "red" }}>{validation}</p>
    </FormControl>
  );
}

const CustomChip = ({ label, onDelete }) => (
  <Chip
    avatar={<Avatar>{label[0]}</Avatar>}
    label={label}
    onDelete={onDelete}
    variant='outlined'
    color='primary'
    style={{ margin: '15px 5px' }}
  />
)


/**=========================*/
const QuotationForm = ({ products }) => {

  const dispatch = useDispatch();

  const { formData, formErrors } = useSelector((state) => state.quotation);
  const selectedVariation = useSelector((state) => state.quotation.selectedVariation);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  const handleProductChange = (event, selectedProducts) => {
    dispatch(updateFormData({ selectedProducts }));
  };



  const handleCountryChange = (event, selectedCountry) => {
    dispatch(updateFormData({ selectedCountry }));
  };

  const colors = ['Red', 'Blue', 'Green', 'Yellow'].map((color) => ({ label: color, value: color }));
  const sizes = ['Small', 'Medium', 'Large', 'XL'].map((size) => ({ label: size, value: size }));

  const handleColorChange = (event, color) => {
    dispatch(updateFormData({ color: event.target.value }));
  };
  const handleSizeChange = (event, size) => {
    dispatch(updateFormData({ size: event.target.value }));

  }

  const handleAddVariation = () => {
    // Check if all required fields are selected
    if (formData.color && formData.size && formData.quantity) {

      dispatch(updateFormErrors({ isVariaton: null }));
      // Create a new product object
      const newVariation = {
        color: formData.color,
        size: formData.size,
        quantity: formData.quantity,
      }

      // Dispatch an action to add the new product to the array in the state
      dispatch(addVariation([...selectedVariation, newVariation]));

      // Reset the selected values in the form
      dispatch(updateFormData({
        color: '',
        size: '',
        quantity: '',
      }));
    } else {
      // Handle error or display a message if required fields are not selected
      console.log("Please select Product, Color, Size, Quantity");

      dispatch(updateFormErrors({ isVariaton: 'Please select size, color, quantity' }));

    }
  };

  const handleRemoveVariation = (index) => {
    const updatedVariation = [...selectedVariation];
    updatedVariation.splice(index, 1);
    dispatch(addVariation(updatedVariation));
  }

  /**Form Submit */
  const handleSubmit = () => {

    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isPhoneNumberValid = (phoneNumber) => {
      try {
        const parsedPhoneNumber = parsePhoneNumber(phoneNumber);
        return parsedPhoneNumber && parsedPhoneNumber.isValid();
      } catch (error) {
        return false;
      }
    };

    // Validate the form
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isEmailValid(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!isPhoneNumberValid(formData.phone)) {
      errors.phone = 'Invalid phone number format. Please enter the phone number format e.g., +1 213 373 4253';
    }

    if (!formData.selectedProducts || formData.selectedProducts.length === 0) {
      errors.selectedProducts = 'Please select at least one product';
    }

    if (!formData.selectedCountry || formData.selectedCountry.length === 0) {
      errors.selectedCountry = 'Please select a country';
    }

    dispatch(updateFormErrors(errors));

    //If no errors, submit the data
    if (Object.keys(errors).length === 0) {
      // dispatch(submitData(formData));
      dispatch(submitData({ formData, selectedVariation }));

      dispatch(resetFormData());
      dispatch(addVariation());
    }





  };

  return (
    <div>
      <Grid container spacing={2} paddingBottom={5} marginBottom={2}>
        <Grid item xs={12} md={6}>
          <CustomTextField
            label="Name *"
            type='text'
            name="name"
            value={formData.name}
            onChange={handleChange}
            validation={formErrors.name && formErrors.name}
          />

          <CustomTextField
            label="Email *"
            type='email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            validation={formErrors.email && formErrors.email}
          />
          <div>
            <CountrySelect
              name="selectedCountry"
              onChange={handleCountryChange}
            />
            {formErrors.selectedCountry && <p style={{ margin: 5, color: 'red' }}>{formErrors.selectedCountry}</p>}
          </div>
          <CustomTextField
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <CustomTextField
            label="Phone number e.g., +1 213 373 4253 *"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            validation={formErrors.phone && formErrors.phone}
          />

          <TextField
            label="Customization Details"
            variant="outlined"
            name="details"
            value={formData.details}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ marginTop: 2 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            multiple
            id="product-select"
            sx={{ marginTop: 2 }}
            options={products}
            getOptionLabel={(option) => option.title}
            value={formData.selectedProducts || []}
            onChange={handleProductChange}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  label={option.title}

                  color="primary"
                  {...getTagProps({ index })}
                  style={{ margin: 2 }}
                />
              ))
            }
            renderOption={(props, option) => (
              <li {...props}>
                <Grid container spacing={1}>
                  <Grid item>
                    <img src={option.imageUrl} alt={option.title} style={{ width: 50, height: 50 }} />
                  </Grid>
                  <Grid item>{option.title}</Grid>
                </Grid>
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Select Products *" placeholder="Search products" />
            )}
          />
          {formErrors.selectedProducts && <p style={{ margin: 5, color: 'red' }}>{formErrors.selectedProducts}</p>}

          <CustomTextField
            label="Shipping Method"
            type="text"
            name="shippingMethod"
            value={formData.shippingMethod}
            onChange={handleChange}

          />
          <CustomTextField
            label="Delivery Terms"
            type="text"
            name="deliveryTerms"
            value={formData.deliveryTerms}
            onChange={handleChange}

          />

          <CustomDropdown
            label="size"
            options={sizes}
            value={formData.size || ''}
            onChange={handleSizeChange}
          />

          <CustomDropdown
            label="color"
            options={colors}
            value={formData.color || ''}
            onChange={handleColorChange}
            validation={formErrors.color && formErrors.color}
          />

          <CustomTextField
            label="Quantity"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            validation={formErrors.quantity && formErrors.quantity}
          />

          {formErrors.isVariaton && <p style={{ color: 'red' }}>{formErrors.isVariaton}</p>}
          <Button sx={{ marginTop: 2 }} variant="contained" color='primary' onClick={handleAddVariation}>
            Add Color & Size
          </Button>

          {
            selectedVariation && selectedVariation.map((variation, index) => (
              <CustomChip
                key={index}
                label={`${variation.color}, ${variation.size},${variation.quantity}`}
                onDelete={() => handleRemoveVariation(index)}
              />
            ))
          }

        </Grid>
      </Grid>
      <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Submit Quotation Request
      </Button>
    </div>
  )
}

export default QuotationForm