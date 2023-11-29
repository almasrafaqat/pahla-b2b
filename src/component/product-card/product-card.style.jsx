import styled, { css } from "styled-components";
import {  Mobile } from "../../responsive";
import {  QuotationIcon, SampleIcon } from "../../globalStyle";

export const Card = styled.div`
  display: flex;
  align-items: start;
  gap: 10px; 
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 10px;
  &:last-child{
    border-bottom: 0;
  }

  &.card--column{
    flex-direction: column;
  }
  &:last-child{
    margin-bottom: 0;
  }

  ${Mobile({ flexDirection: "column" })}
`;

export const ImageContainer = styled.div`
  flex: 40%;
  background-color: #fff;
  text-align: center;
  border-radius: 15px;
  height: 150px;

  &.card--column{
    width: 100%;
   
  }
  &.card--column img{
    max-width: 100%;
    height: 200px;
    object-fit: contain;

    ${Mobile({ height: "100%" })}
  
  }
`;
export const ProductImage = styled.img`
  width: 80%;
  padding: 5px;
  height: 95%;
  object-fit: contain;


  ${Mobile({ width: "100%" })}
`;

export const ProductInfo = styled.div`
  flex: 70%;
`;

const MockupColor = css`
  color: ${({ theme }) => theme.colors.red};
  border: 1px dashed;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  ${Mobile({ marginRight: "0" })}
`;

const CartColor = css`
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: ${(props) => props.color === 'sample' ? ({ theme }) => theme.colors.primary : 'black'};
  ${(props) => props.color === 'mockup' && MockupColor};
  ${(props) => props.color === 'cart' && CartColor};
  cursor: pointer;
`;

export const SampleIconCustmized = styled(SampleIcon)`
  ${Mobile({ fontSize: "1rem!important" })}
`
export const QuotationIconCustmized = styled(QuotationIcon)`
  ${Mobile({ fontSize: "1rem!important" })}
`;
export const MockupCartContainer = styled.div`
  display: inline-flex;

  ${Mobile({ display: "block" })}
`;

export const SpanTag = styled.span`
 margin-left: 5px;
`;