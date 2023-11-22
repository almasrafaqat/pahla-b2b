import styled from "styled-components";



export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
`;

export const SearchButton = styled.button`
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.9rem;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const GoogleSignInButton = styled(BaseButton)`
    
      background-color: #4285f4;
      color: white;
  
      &:hover {
        background-color: #357ae8;
        border: none;
      }
    

`;

export const InvertedButton = styled(BaseButton)`
 
      background-color: white;
      color: black;
      border: 1px solid black;
  
      &:hover {
        background-color: black;
        color: white;
        border: none;
      }

`;