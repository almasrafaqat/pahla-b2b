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
import { setSelectedColor, setSelectedProducts, setSelectedQuantity, setSelectedSize, setSelectedVariation } from '../../reducers/customizationReducer';
import CountrySelect from '../country-list/country-list.component';


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

const CustomDropdown = ({ label, value, onChange, options, multiple, renderValue }) => {
  return (
    <FormControl fullWidth style={{ marginTop: "20px" }}>
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
    style={{ margin: '0.5rem' }}
  />
)




/**=========================*/
const FormComponent = ({ products }) => {

  const dispatch = useDispatch();

  const selectedProducts = useSelector((state) => state.customization.selectedProducts);
  const selectedSize = useSelector((state) => state.customization.selectedSize);
  const selectedColor = useSelector((state) => state.customization.selectedColor);
  const selectedQuantity = useSelector((state) => state.customization.selectedQuantity);
  const selectedVariation = useSelector((state) => state.customization.selectedVariation);




  console.log("selectedColor", "selectedColor");


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
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CustomTextField
            label="Name"
            type="text"
          />
          <CustomTextField
            label="Email"
            type="email"
          />

          <CustomDropdown
            label="color"
            options={[{ label: 'Black', value: 'black' }, { label: 'White', value: 'white' }]}
            value={selectedColor}
            onChange={(e) => dispatch(setSelectedColor(e.target.value))}
          />
          <CustomDropdown
            label="size"
            options={[{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }]}
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


          <Button variant="contained" color='primary' onClick={handleAddVariation}>
            Add Color & Size
          </Button>

          {
            selectedVariation.map((variation, index) => (
              <CustomChip
                key={index}
                label={`${variation.color}, ${variation.size},${variation.quantity}`}
                onDelete={() => handleRemoveVariation(index)}
              />
            ))
          }
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            multiple
            id="product-select"
            style={{ marginTop: '15px', marginBottom: '15px' }}
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
          <div style={{ marginTop: "25px", marginBottom: "8px" }}>
            <CountrySelect />
          </div>
          <CustomDropdown
            label="Ship"
            options={[{ label: 'By Sea', value: 'sea' }, { label: 'By Air', value: 'air' }]}

          />
          <CustomDropdown
            label="Delivery"
            options={[{ label: 'FOB', value: 'fob' }, { label: 'CIF', value: 'cif' }]}

          />
        </Grid>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Submit Quotation Request
        </Button>
      </Grid>

    </div >
  )
}

export default FormComponent