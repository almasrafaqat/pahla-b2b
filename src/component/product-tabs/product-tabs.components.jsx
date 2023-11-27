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

  const { topRanking, newArrivals, hotSelling } = otherProps;

  // Top Ranking
  const topRankingCategories = Array.from(new Set(topRanking?.map(product => product.category)));
  const CategoryTopRankingSlice = topRankingCategories.slice(0, 3);
  const topRankingProByCategory = (category) => topRanking?.filter(product => product.category === category).slice(0, prductNumber);

  //New Arrivals
  const NewArrivalCategories = Array.from(new Set(newArrivals?.map(product => product.category)));
  const CategorynewArrivalsSlice = NewArrivalCategories.slice(0, 3);
  const newArrivalsProductByCategory = (category) =>
    newArrivals?.filter(product => product.category === category).slice(0, prductNumber);

  //Hot Selling
  const hotSellingCategories = Array.from(new Set(hotSelling?.map(product => product.category)));
  const CategoryHotSellingsSlice = hotSellingCategories.slice(0, 3);
  const hotSellingProductByCategory = (category) =>
    hotSelling?.filter(product => product.category === category).slice(0, prductNumber);

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
              <b>View More</b>
              <div><ArrowForwardIcon /></div>
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
              {
                CategoryTopRankingSlice.map((category, index) => {
                  return (
                    <ProductContainer key={index}>
                      <ProductHeading>
                        {category.slice(0, 1).toUpperCase() + category.slice(1, category.length)}
                      </ProductHeading>
                      {
                        topRankingProByCategory(category).map((product, index) => (
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
                        ))
                      }
                    </ProductContainer>
                  )
                })
              }
            </ProductColumn>
          </ProductTabPanel>
          <ProductTabPanel value={value} index={1}>
            <ProductColumn>
              {
                CategorynewArrivalsSlice.map((category, index) => {
                  return (
                    <ProductContainer key={index}>
                      <ProductHeading>
                        {category.slice(0, 1).toUpperCase() + category.slice(1, category.length)}
                      </ProductHeading>
                      {
                        newArrivalsProductByCategory(category).map((product, index) => (
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
                        ))
                      }
                    </ProductContainer>
                  )
                })
              }
            </ProductColumn>
          </ProductTabPanel>
          <ProductTabPanel value={value} index={2}>
            <ProductColumn>
              {
                CategoryHotSellingsSlice.map((category, index) => {
                  return (
                    <ProductContainer key={index}>
                      <ProductHeading>
                        {category.slice(0, 1).toUpperCase() + category.slice(1, category.length)}
                      </ProductHeading>
                      {
                        hotSellingProductByCategory(category).map((product, index) => (
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
                        ))
                      }
                    </ProductContainer>
                  )
                })
              }
            </ProductColumn>
          </ProductTabPanel>
        </Box>
      </TabsContainer>
    </TabsSection >
  )
}

export default ProductsTabs;