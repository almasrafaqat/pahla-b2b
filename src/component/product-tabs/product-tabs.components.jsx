import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FlexContainer, ImageContainer, ProductCard, ProductColumn, ProductContainer, ProductHeading, ProductImage, ProductInfo, SpanTag, TabsContainer, TabsHeading, TabsHeadingContainer, TabsSection, TabsViewMore } from './product-tabs.style';
import { ArrowForwardIcon, Link, QuotationIcon, SampleIcon } from '../../globalStyle';

function ProductTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div style={{ marginTop: "30px" }}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
}

ProductTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `ny-product-tab-${index} ny--tabs`,
    'aria-controls': `ny-product-tabpanel-${index}`,
  };
}

const DefaultProps = {
  PRODUCT_DIRECTION: 'undefined',
  SECTION_H: 'Top Ranking',
  PRODUCT_NO: 3,

}
const ProductsTabs = ({ productDir = DefaultProps.PRODUCT_DIRECTION, sectionHeading = DefaultProps.SECTION_H, prductNumber = DefaultProps.PRODUCT_NO, ...otherProps }) => {

  const { allProducts } = otherProps;

  // Create a dictionary to group products by category
  const productsByCategory = allProducts.reduce((acc, product) => {
    acc[product.category] = [...(acc[product.category] || []), product];
    return acc;
  }, {});


  // Get an array of unique categories
  const categories = Object.keys(productsByCategory);


  const categorySlices1 = categories.slice(0, 3);
  // get Product from all categories wise
  const ProductByCategory = categorySlices1.flatMap(category =>
    productsByCategory[category].slice(0, prductNumber)
  );





  const [value, setValue] = useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };


  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeadingContainer>
          <TabsHeading>{sectionHeading}</TabsHeading>
          <TabsViewMore>
            <Link to="/" className="view-more--link">
              <span>View More</span>
              <span><ArrowForwardIcon /></span>
            </Link>
          </TabsViewMore>
        </TabsHeadingContainer>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Top Ranking" {...a11yProps(0)} />
            <Tab label="New Arrival" {...a11yProps(1)} />
            <Tab label="Hot Selling" {...a11yProps(2)} />
          </Tabs>
          <ProductTabPanel value={value} index={0}>
            <ProductColumn>
              {categorySlices1.map(category => (
                <ProductContainer key={category}>
                  <ProductHeading>{category.slice(0, 1).toUpperCase() + category.slice(1, category.length)}</ProductHeading>
                  <p>Product Count: {productsByCategory[category].length}</p>

                  {ProductByCategory.filter(product => product.category === category).map(product => (
                    <ProductCard key={product.id} className={`${productDir}`}>
                      <ImageContainer className={`${productDir}`}>
                        <Link to={`/productdetails/${product.id}`}>

                          <ProductImage src={product.imageUrl} alt={`Product--${product.id}`} />

                        </Link>
                      </ImageContainer>
                      <ProductInfo>
                        <Link to="/">
                          <h4>{product.title.slice(0, 25)}...</h4>
                        </Link>
                        <FlexContainer>
                          <span>Min.Order:</span><SpanTag>5 Pieces</SpanTag>
                        </FlexContainer>
                        <FlexContainer color="true">
                          <QuotationIcon /> <SpanTag>Request Quotation</SpanTag>
                        </FlexContainer>
                        <FlexContainer color="true">
                          <SampleIcon /> <SpanTag>Request Sample</SpanTag>
                        </FlexContainer>
                      </ProductInfo>
                    </ProductCard>
                  ))}

                </ProductContainer>
              ))}
            </ProductColumn>
          </ProductTabPanel>
          <ProductTabPanel value={value} index={1}>

          </ProductTabPanel>
          <ProductTabPanel value={value} index={2}>

          </ProductTabPanel>
        </Box>
      </TabsContainer>
    </TabsSection >
  )
}

export default ProductsTabs;