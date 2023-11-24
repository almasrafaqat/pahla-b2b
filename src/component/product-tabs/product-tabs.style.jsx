import styled from "styled-components";
import { Mobile } from "../../responsive";


export const TabsSection = styled.section``;

export const TabsContainer = styled.div`
  max-width: 80%;
  margin:4% auto;

  & #ny--tabs{
    border: 2px solid black;
  }
  & #ny--tabs span.MuiTabs-indicator{
    border: none !important;
    width: 0px!important;
    height: 0px!important; 
  }

  ${Mobile({maxWidth: "95%"})}
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

  ${Mobile({gridTemplateColumns: "1fr", gap: "0"})}
`;

export const ProductContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 15px;

  ${Mobile({marginBottom: "20px"})}
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

  &:last-child{
    margin-bottom: 0;
  }

  ${Mobile({flexDirection: "column"})}

`;

export const ProductImage = styled.img`
  max-width: 150px;
  min-height: 150px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
  object-fit: cover;
  text-align: center;
  padding: 5px;

  ${Mobile({maxWidth: "100%"})}
`;

export const ProductInfo = styled.div``;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  color: ${(props) => props.color? ({theme}) => theme.colors.primary: 'black'};
`;

export const SpanTag = styled.span`
  margin-left: 5px;
`;


