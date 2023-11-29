import styled, { css } from "styled-components";
import { ExtraLargeScreenTV, IpadTablets, LaptopsSmallScreen, Mobile } from "../../responsive";
import { Container, QuotationIcon, SampleIcon } from "../../globalStyle";

export const TabsSection = styled.section``;
export const TabsContainer = styled(Container)`
  margin:70px auto;

  & #ny--tabs{
    border: 2px solid black;
  }
  & #ny--tabs span.MuiTabs-indicator{
    border: none !important;
    width: 0px!important;
    height: 0px!important; 
  }

  ${Mobile({ margin: "50px auto" })}
 
`;

export const TabsHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TabsHeading = styled.h2``;
export const TabsViewMore = styled.div`
   .view-more--link{
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    line-height: 1;
   
    ${Mobile({ fontSize: "1rem" })}
  }
`;

export const ProductColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 50px;
  
  ${Mobile({ gridTemplateColumns: "1fr 1fr", gap: "20px" })}
  ${IpadTablets({ gridTemplateColumns: "1fr 1fr", gap: "20px" })}
  ${LaptopsSmallScreen({ gridTemplateColumns: "1fr 1fr", gap: "20px" })} 
  ${ExtraLargeScreenTV({ gridTemplateColumns: "1fr 1fr 1fr", gap: "50px" })}
`;

export const ProductContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 15px;

  ${Mobile({ marginBottom: "20px", height: "fit-content", fontSize: "0.6rem" })}
  ${IpadTablets({ marginBottom: "20px", height: "fit-content" })}
`;

export const ProductHeading = styled.h2`
  position: relative;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1.2rem;

  &::after {
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }
  ${Mobile({ fontSize: "1rem" })}
`;

export const ProductCard = styled.div`
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


