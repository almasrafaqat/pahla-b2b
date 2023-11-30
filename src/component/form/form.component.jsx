import React from 'react'
import {
  TextField,
  Button,
  Grid,
   Chip,
  Avatar,
  Autocomplete
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedColor, setSelectedProducts, setSelectedQuantity, setSelectedSize, setSelectedVariation } from '../../reducers/customizationReducer';
//resuable text field

const CustomTextField = ({ label, value, onChange, type = 'text', ...rest }) => (
  <TextField
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    {...rest}
    margin="normal"
    variant="outlined"
    fullWidth

  />
)

const CustomChip = ({ label, onDelete }) => (
  <Chip
    avatar={<Avatar>{label[0]}</Avatar>}
    label={label}
    onDelete={onDelete}
    variant='outlined'
    color='primary'
    style={{ margin: '0.5rem' }}
  />
)

const FormComponent = ({ products, onSubmitCustomization }) => {

  const dispatch = useDispatch();

  const selectedProducts = useSelector((state) => state.customization.selectedProducts);
  const selectedSize = useSelector((state) => state.customization.selectedSize);
  const selectedColor = useSelector((state) => state.customization.selectedColor);
  const selectedQuantity = useSelector((state) => state.customization.selectedQuantity);
  const selectedVariation = useSelector((state) => state.customization.selectedVariation);



  console.log("selectedVariation", selectedVariation);


  //Adding a New Variation:
  const handleAddVariation = () => {
    const newVariation = {
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity
    }
    dispatch(setSelectedVariation([...selectedVariation, newVariation]));
    dispatch(setSelectedColor(''));
    dispatch(setSelectedSize(''));
    dispatch(setSelectedQuantity(0));
  }
  //Removing a Variation:
  const handleRemoveVariation = (index) => {
    const updatedVariation = [...selectedVariation];
    updatedVariation.splice(index, 1);
    dispatch(setSelectedVariation(updatedVariation));
  }
  //Products set into state
  const handleProductSelectChange = (event, product) => {
    dispatch(setSelectedProducts(product));
  }

  const handleDeleteChip = (chipToDelete) => () => {
    setSelectedProducts((chips) => chips.filter((chip) => chip.title !== chipToDelete));
  };

  return (
    <div style={{ background: "white", width: '80%', margin: "20px auto" }}>


      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
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
          <CustomTextField
            label="color"
            value={selectedColor}
            onChange={(e) => dispatch(setSelectedColor(e.target.value))}
          />
          <CustomTextField
            label="size"
            value={selectedSize}
            onChange={(e) => dispatch(setSelectedSize(e.target.value))}
          />
          <CustomTextField
            label="quality"
            value={selectedQuantity}
            onChange={(e) => dispatch(setSelectedQuantity(e.target.value))}
            type="number"
            inputProps={{ min: 0 }}
          />

          <Button variant='outline' color='primary' onClick={handleAddVariation}>
            Add Variation
          </Button>

          {
            selectedVariation.map((variation, index) => (
              <CustomChip
                key={index}
                label={`${variation.color}, ${variation.size},${variation.quantity} --- ${index}`}
                onDelete={() => handleRemoveVariation(index)}
              />
            ))
          }
        </Grid>
      </Grid>

    </div >
  )
}

export default FormComponent