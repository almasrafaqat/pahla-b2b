import styled from "styled-components";
import { Container } from "../../globalStyle";


export const HeaderMobileSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 350px;
  height: 100vh;
  z-index: 9999;
  
`;

export const HeaderMobileContainer = styled(Container)`
    background-color: ${({ theme }) => theme.colors.white};
    height: 100%;
    width: 100%;
    padding: 20px 10px 0 10px;
    line-height: 20px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0px;
    }
`;

export const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.div`
    img{
      max-width: 100px;
    }
`;

export const HeaderBody = styled.div`
  padding: 20px;
`;

export const HeaderFooter = styled.div`

`;

export const InfoContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 20px;
  margin: 17px 0 50px 0;
  border-radius: 5px;
  `;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0px;
 
 a {
  color: black;
 }
`;

export const SocialContainer = styled.div``;

export const IconBg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:  ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
  `;

export const CopyRightContainer = styled.div`
  margin-top: 30px;
  font-size: 14px;
  font-weight: 200;
`;