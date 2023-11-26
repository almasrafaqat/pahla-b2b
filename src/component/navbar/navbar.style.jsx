import styled from "styled-components";
import { IpadTablets, Mobile } from "../../responsive";
import { Container } from "../../globalStyle";


export const NavbarContainer = styled.section`
   margin-top: 2%;
`;

export const HeaderWrapper = styled(Container)`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
`;

export const Navigation = styled.nav`
  ul {
      list-style-type: none;
      display: flex;

      ${Mobile({display: "block"})}
      ${IpadTablets({display: "block"})}
    }

    ul li {
      margin-right: 1rem;
      cursor: pointer;
      font-size: 1.2rem;

      ${Mobile({marginRight: "0", marginBottom: "30px"})}
      ${IpadTablets({marginRight: "0", marginBottom: "30px"})}
    }
`;

export const IconBody = styled.div`
  display: flex;

  ${Mobile({display: "block"})}
  ${IpadTablets({display: "block"})}
  
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  color: ${({theme}) => theme.colors.primary};
  font-weight: 700;

  ${Mobile({margin: "0", justifyContent: "start", marginTop: "15px"})}
  ${IpadTablets({margin: "0", justifyContent: "start", marginTop: "15px"})}
  
`;

