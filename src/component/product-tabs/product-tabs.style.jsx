import styled from "styled-components";
import { ExtraLargeScreenTV, IpadTablets, LaptopsSmallScreen, Mobile } from "../../responsive";
import { Container } from "../../globalStyle";


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
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
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


  ${Mobile({ marginBottom: "20px" })}
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
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: start;
  gap: 10px; 
  margin-top: 20px;
  margin-bottom: 20px;


  &.column{
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
  


  &.column{
    width: 100%;
    height: 200px;

  }
  &.column img{
    max-width: 100%;
    height: 200px;
    object-fit: contain;
  
  }
`;
export const ProductImage = styled.img`
  
  width: 80%;
 
  padding: 5px;

  /* ${Mobile({ maxWidth: "100%" })} */
`;

export const ProductInfo = styled.div`
  flex: 70%;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  color: ${(props) => props.color ? ({ theme }) => theme.colors.primary : 'black'};
`;

export const SpanTag = styled.span`
  margin-left: 5px;
`;


