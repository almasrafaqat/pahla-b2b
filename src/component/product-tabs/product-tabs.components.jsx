import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FlexContainer, ProductCard, ProductColumn, ProductContainer, ProductHeading, ProductImage, ProductInfo, SpanTag, TabsContainer, TabsHeading, TabsHeadingContainer, TabsSection, TabsViewMore } from './product-tabs.style';
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
        <Box sx={{ p: 1 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

ProductTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `ny-product-tab-${index} ny--tabs`,
    'aria-controls': `ny-product-tabpanel-${index}`,
  };
}


const ProductsTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);

  };

  return (
    <TabsSection>
      <TabsContainer>
        <TabsHeadingContainer>
          <TabsHeading>Top Ranking</TabsHeading>
          <TabsViewMore>
            <Link to="/" className="view-more--link">
              <span>View More</span>
              <span><ArrowForwardIcon /></span>
            </Link>
          </TabsViewMore>
        </TabsHeadingContainer>
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Top Ranking" {...a11yProps(0)} />
              <Tab label="New Arrival" {...a11yProps(1)} />
              <Tab label="Hot Selling" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <ProductTabPanel value={value} index={0}>
            <ProductColumn>
              <ProductContainer>
                <ProductHeading>Soccer Jersey</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img1.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img2.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img3.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>

              <ProductContainer>
                <ProductHeading>Football Uniform</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img2.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img3.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img4.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>

              <ProductContainer>
                <ProductHeading>100% Polyster Soccer Jersey</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img5.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img6.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img7.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>



            </ProductColumn>
          </ProductTabPanel>
          <ProductTabPanel value={value} index={1}>
            <ProductColumn>

              <ProductContainer>
                <ProductHeading>100% Polyster Soccer Jersey</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img5.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img6.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img7.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>
              <ProductContainer>
                <ProductHeading>Soccer Jersey</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img1.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img2.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img3.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>

              <ProductContainer>
                <ProductHeading>Football Uniform</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img2.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img3.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img4.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>


            </ProductColumn>
          </ProductTabPanel>
          <ProductTabPanel value={value} index={2}>
            <ProductColumn>
              <ProductContainer>
                <ProductHeading>Football Uniform</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img2.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img3.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img4.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>
              <ProductContainer>
                <ProductHeading>Soccer Jersey</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img1.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img2.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img3.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>



              <ProductContainer>
                <ProductHeading>100% Polyster Soccer Jersey</ProductHeading>
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img5.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img6.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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

                <ProductCard>
                  <Link to="/">
                    <ProductImage src="/img/slider/img7.webp" alt="Product--1" />
                  </Link>
                  <ProductInfo>
                    <Link to="/">
                      <h4>Soccer Jersy Red for Team</h4>
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
              </ProductContainer>
            </ProductColumn>
          </ProductTabPanel>
        </Box>
      </TabsContainer>
    </TabsSection>
  )
}

export default ProductsTabs;