import styled from "styled-components";
import { Mobile } from "../../responsive";


export const NavbarContainer = styled.section`
   margin-top: 2%;
`;

export const HeaderWrapper = styled.div`
   max-width: 80%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;

   ${Mobile({border:"1px solid"})}
`;

export const Navigation = styled.nav`
  ul {
      list-style-type: none;
      display: flex;
    }

    ul li {
      margin-right: 1rem;
      cursor: pointer;
      font-size: 1.2rem;
    }
`;

export const IconBody = styled.div`
  display: flex;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  
`;

