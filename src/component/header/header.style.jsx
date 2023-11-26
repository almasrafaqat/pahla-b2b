import styled from "styled-components";
import { IpadTablets, Mobile } from "../../responsive";
import { Container } from "../../globalStyle";

export const HeaderSection = styled.header``;

export const MainContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TopHeader = styled(Container)`
 
  background-color: #fff;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Mobile({  flexDirection: "column", gap: "20px" })}
  ${IpadTablets({  flexDirection: "column", gap: "20px" })}

`;

export const HeaderContainer = styled.div`
  
`;

export const Logo = styled.img`
  max-width: 150px;
  max-height: 60px;
  border-radius: 5px 0 0 0;
`;


export const AccountLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    span{
      margin-right: 50px;
    }
    span:last-child {
    margin-right: 0;
    } 

  ${Mobile({ width: "98%" })}
  ${IpadTablets({ width: "98%" })}
`;




