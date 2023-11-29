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

export const ProductHeading = styled.h3`
  position: relative;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  padding-bottom: 0.6rem;
  

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




