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
  PRODUCT_DIRECTION: 'card-no--column',
  SECTION_H: 'Top Ranking',
  PRODUCT_NO: 3,
  PRODUCT_GRID: 9,
}



const ProductsTabs = ({ productDir = DefaultProps.PRODUCT_DIRECTION, sectionHeading = DefaultProps.SECTION_H, prductNumber = DefaultProps.PRODUCT_NO, productGrid = DefaultProps.PRODUCT_GRID, ...otherProps }) => {

  const { newArrivalsLabel, newArrivals, topRankingLabel, topRanking, hotSellingLabel, hotSelling, categoryWiseProducts } = otherProps;

  /**Label Wise Products */
  const labelsArray = [topRankingLabel, newArrivalsLabel, hotSellingLabel];
  const [selectedLabel, setSelectedLabel] = useState(0);

  /**Category wise Products */
  const categoriesArray = [...new Set(categoryWiseProducts?.map((product) => product.category))];
  const [selectCategory, setSelectedCategory] = useState(categoriesArray[0]);

  console.log("selectCategory", selectCategory);
  const handleChange = (event, value) => {
    setSelectedLabel(value);
  };

  const handleChangeCategory = (event, value) => {
    setSelectedCategory(value);
  };

  /** Get Products by Labels selctions */
  const getProductsForLabels = () => {
    switch (selectedLabel) {
      case 0:
        return hotSelling;
      case 1:
        return newArrivals;
      case 2:
        return topRanking;
      default:
        return [];
    }
  }

  const filteredLabelProducts = getProductsForLabels();
  const filteredLabelProductsSlice = filteredLabelProducts?.slice(0, productGrid);
  const productLength = Math.ceil(filteredLabelProductsSlice?.length / prductNumber);


  const filteredCategoryProducts = (categoryWiseProducts?.filter(product => product.category === selectCategory).slice(0, 6));

  const CategoryProductLength = Math.ceil(filteredCategoryProducts?.length / prductNumber);


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
          {labelsArray && <Tabs value={selectedLabel} onChange={handleChange} aria-label="ny--tabs">
            {
              labelsArray?.map((label, index) => <Tab key={index} value={index} label={label} {...a11yProps(index)} />)
            }
          </Tabs>
          }
          {categoriesArray && <Tabs value={selectCategory} onChange={handleChangeCategory} aria-label="ny--tabs">
            {
              categoriesArray?.map((category, index) => <Tab key={index} value={category} label={category} {...a11yProps(index)} />)
            }
          </Tabs>
          }
        </Box>
        {labelsArray &&
          <ProductTabPanel value={selectedLabel} index={selectedLabel}>
            <ProductColumn>
              {
                filteredLabelProducts?.slice(0, productLength).map((_, ind) => {
                  const startIndex = ind * prductNumber;
                  const endIndex = startIndex + prductNumber;
                  return (
                    <ProductContainer key={ind}>
                      {
                        filteredLabelProducts.slice(startIndex, endIndex).map((product) =>
                          <div key={product.id}>
                            <ProductHeading>
                              {product.category.slice(0, 1).toUpperCase() + product.category.slice(1, product.category.length)}
                            </ProductHeading>
                            <ProductCard key={ind} className={`card--${productDir}`}>
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
                          </div>
                        )
                      }
                    </ProductContainer>
                  )
                })
              }
            </ProductColumn>
          </ProductTabPanel>
        }
        {categoriesArray &&
          <ProductTabPanel value={selectCategory} index={selectCategory}>
            <ProductColumn>
              {
                filteredCategoryProducts?.slice(0, CategoryProductLength).map((_, ind) => {
                  const startIndex = ind * prductNumber;
                  const endIndex = startIndex + prductNumber;
                  return (
                    <ProductContainer key={ind}>
                      {
                        filteredCategoryProducts.slice(startIndex, endIndex).map((product) =>
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
        }
      </TabsContainer>
    </TabsSection >
  )
}

export default ProductsTabs;