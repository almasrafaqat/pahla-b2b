import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FlexContainer, ImageContainer, MockupCartContainer, ProductCard, ProductColumn, ProductContainer, ProductHeading, ProductImage, ProductInfo, QuotationIconCustmized, SampleIconCustmized, SpanTag, TabsContainer, TabsHeading, TabsHeadingContainer, TabsSection, TabsViewMore } from './product-tabs.style';
import { ArrowForwardIcon, CardCartIcon, Link, MockupIcon } from '../../globalStyle';

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

// ProductTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// }

function a11yProps(index) {
  return {
    id: `ny-product-tab-${index} ny--tabs`,
    'aria-controls': `ny-product-tabpanel-${index}`,
  };
}

const DefaultProps = {
  PRODUCT_DIRECTION: 'card-no--column',
  SECTION_H: 'Top Ranking',
  PRODUCT_NO: 3,
  PRODUCT_GRID: 9,
}



const ProductsTabs = ({ productDir = DefaultProps.PRODUCT_DIRECTION, sectionHeading = DefaultProps.SECTION_H, prductNumber = DefaultProps.PRODUCT_NO, productGrid = DefaultProps.PRODUCT_GRID, categories, productsByCategories, ...otherProps }) => {


  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  }

  const filteredProducts = productsByCategories[selectedCategory] || [];
  const gridContainers = Math.ceil(filteredProducts.slice(0, productGrid).length / prductNumber);


  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeadingContainer>
          <TabsHeading>{sectionHeading}</TabsHeading>
          <TabsViewMore>
            <Link to="/" className="view-more--link">
              <b>View More</b>
              <div><ArrowForwardIcon /></div>
            </Link>
          </TabsViewMore>
        </TabsHeadingContainer>
        <Box sx={{ width: '100%' }}>
          <Tabs value={selectedCategory} onChange={handleCategoryChange} aria-label="ny--tabs">
            {
              categories && categories.map((category, index) =>
                <Tab key={index} value={category} label={category} {...a11yProps(index)} />)
            }
          </Tabs>
        </Box>
        <ProductTabPanel value={selectedCategory} index={selectedCategory}>
          <ProductColumn>
            {
              filteredProducts?.slice(0, gridContainers).map((_, ind) => {
                const startIndex = ind * prductNumber;
                const endIndex = startIndex + prductNumber;
                return (
                  <ProductContainer key={ind}>
                    {
                      filteredProducts.slice(startIndex, endIndex).map((product) =>
                        <div key={product.id}>
                          <ProductHeading>
                            {product.category.slice(0, 1).toUpperCase() + product.category.slice(1, product.category.length)}
                          </ProductHeading>
                          <ProductCard key={ind} className={`card--${productDir}`}>
                            <ImageContainer className={`card--${productDir}`}>
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
                              <FlexContainer color="sample" size="small">
                                <QuotationIconCustmized /> <SpanTag>Request Quotation</SpanTag>
                              </FlexContainer>
                              <FlexContainer color="sample">
                                <SampleIconCustmized /> <SpanTag>Request Sample</SpanTag>
                              </FlexContainer>
                              <MockupCartContainer>
                                <FlexContainer color="mockup">
                                  <MockupIcon /> <SpanTag>Mockup</SpanTag>
                                </FlexContainer>
                                <FlexContainer color="cart">
                                  <CardCartIcon /> <SpanTag>Start Order</SpanTag>
                                </FlexContainer>
                              </MockupCartContainer>
                            </ProductInfo>
                          </ProductCard>
                        </div>
                      )
                    }
                  </ProductContainer>
                )
              })
            }
          </ProductColumn>
        </ProductTabPanel>
      </TabsContainer>
    </TabsSection >
  )
}

export default ProductsTabs;