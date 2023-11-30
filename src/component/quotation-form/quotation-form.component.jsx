// CustomizationRequestSection.jsx

import React, { useState } from 'react';
import {
  Autocomplete,
  Button,
  Chip,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CustomizationRequestSection = ({ products, onSubmitCustomization }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantityBySizeAndColor, setQuantityBySizeAndColor] = useState({});
  const [selectedVariations, setSelectedVariations] = useState([]);
  const [quantityByVariation, setQuantityByVariation] = useState({});
  const [customizationRequest, setCustomizationRequest] = useState('');
  const [customizationSubmitted, setCustomizationSubmitted] = useState(false);

  const handleDeleteChip = (chipToDelete) => () => {
    setSelectedProducts((chips) => chips.filter((chip) => chip.label !== chipToDelete));
  };

  const handleProductSelectChange = (event, values) => {
    setSelectedProducts(values);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleQuantityChangeBySizeAndColor = (size, color) => (event) => {
    const newQuantity = { ...quantityBySizeAndColor };
    const key = `${size}-${color}`;
    newQuantity[key] = event.target.value;
    setQuantityBySizeAndColor(newQuantity);
  };

  const handleAddVariation = () => {
    const newVariation = { size: selectedSize, color: selectedColor };
    setSelectedVariations([...selectedVariations, newVariation]);
  };

  const handleRemoveVariation = (index) => () => {
    const updatedVariations = [...selectedVariations];
    updatedVariations.splice(index, 1);
    setSelectedVariations(updatedVariations);

    // Also remove corresponding quantity entry
    const newQuantity = { ...quantityByVariation };
    const keyToRemove = `${selectedSize}-${selectedColor}`;
    delete newQuantity[keyToRemove];
    setQuantityByVariation(newQuantity);
  };

  const handleQuantityChangeByVariation = (size, color, index) => (event) => {
    const newQuantity = { ...quantityByVariation };
    const key = `${size}-${color}`;
    newQuantity[key] = { ...newQuantity[key], [index]: event.target.value };
    setQuantityByVariation(newQuantity);
  };

  const handleCustomizationChange = (event) => {
    setCustomizationRequest(event.target.value);
  };

  const handleSubmitCustomization = () => {
    // Perform submission logic (e.g., send data to server)
    // For demonstration purposes, we'll just log the data to the console
    console.log({
      selectedProducts,
      quantityBySizeAndColor,
      selectedVariations,
      quantityByVariation,
      customizationRequest,
    });

    // Reset form fields
    setSelectedProducts([]);
    setSelectedSize('');
    setSelectedColor('');
    setQuantityBySizeAndColor({});
    setSelectedVariations([]);
    setQuantityByVariation({});
    setCustomizationRequest('');
    setCustomizationSubmitted(true);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Autocomplete for product selection with chips */}
          <FormControl fullWidth>
            <Autocomplete
              multiple
              id="product-select"
              options={products}
              getOptionLabel={(option) => option.title}
              value={selectedProducts}
              onChange={handleProductSelectChange}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    label={option.title}
                    onDelete={handleDeleteChip(option.title)}
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
                <TextField {...params} variant="outlined" label="Select Products" placeholder="Search products" />
              )}
            />
          </FormControl>

          {/* Size, Color, Custom Logo, etc. */}
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="size-select-label">Select Size</InputLabel>
            <Select labelId="size-select-label" id="size-select" value={selectedSize} onChange={handleSizeChange} variant="outlined">
              <MenuItem value="Small">Small</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Large">Large</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="color-select-label">Select Color</InputLabel>
            <Select labelId="color-select-label" id="color-select" value={selectedColor} onChange={handleColorChange} variant="outlined">
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="quantity-input-label">Quantity</InputLabel>
            <Input
              type="number"
              id="quantity-input"
              value={quantityBySizeAndColor[`${selectedSize}-${selectedColor}`] || ''}
              onChange={handleQuantityChangeBySizeAndColor(selectedSize, selectedColor)}
              endAdornment={<InputAdornment position="end">pcs</InputAdornment>}
              inputProps={{ min: 0 }}
            />
          </FormControl>

          {/* Quantity input for each variation */}
          {selectedVariations.map((variation, index) => (
            <FormControl key={index} fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id={`quantity-input-label-${index}`}>Quantity for {variation.size} - {variation.color}</InputLabel>
              <Input
                type="number"
                id={`quantity-input-${index}`}
                value={quantityByVariation[`${variation.size}-${variation.color}`]?.[index] || ''}
                onChange={handleQuantityChangeByVariation(variation.size, variation.color, index)}
                endAdornment={<InputAdornment position="end">pcs</InputAdornment>}
                inputProps={{ min: 0 }}
              />
              <IconButton
                edge="end"
                onClick={handleRemoveVariation(index)}
                aria-label={`Remove ${variation.size} - ${variation.color}`}
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
            </FormControl>
          ))}

          {/* Add Variation button */}
          <Button variant="outlined" color="primary" onClick={handleAddVariation} sx={{ marginTop: 2 }}>
            Add Variation
          </Button>

          {/* Custom logo upload */}
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel id="custom-logo-upload-label">Custom Logo Upload</InputLabel>
            <Input type="file" id="custom-logo-upload" />
          </FormControl>
        </Grid>

      
      </Grid>

      {/* Customization Details */}
      <TextField
        label="Customization Details"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={customizationRequest}
        onChange={handleCustomizationChange}
        sx={{ marginTop: 2 }}
      />

      <Button variant="contained" color="primary" onClick={handleSubmitCustomization} sx={{ marginTop: 2 }}>
        Submit Customization Request
      </Button>

      {customizationSubmitted && (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Customization request submitted! We will review and process it.
        </Typography>
      )}
    </div>
  );
};

export default CustomizationRequestSection;
