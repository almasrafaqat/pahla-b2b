import React from 'react'
import { FlexContainer, ImageContainer, MockupCartContainer, Card,  ProductImage, ProductInfo, QuotationIconCustmized, SampleIconCustmized, SpanTag } from './product-card.style';
import { CardCartIcon, Link, MockupIcon } from '../../globalStyle';

const ProductCard = ({ productDir, id, imageUrl, title, }) => {
  return (
    <Card className={`card--${productDir}`}>
      <ImageContainer className={`card--${productDir}`}>
        <Link to={`/productdetails/${id}`}>
          <ProductImage src={imageUrl} alt={`Product--${id}`} />
        </Link>
      </ImageContainer>
      <ProductInfo>
        <Link to="/">
          <h4>{title.slice(0, 25)}...</h4>
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
    </Card>
  )
}

export default ProductCard