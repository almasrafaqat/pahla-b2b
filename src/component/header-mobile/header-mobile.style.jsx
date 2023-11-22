import {
    Person2Outlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  
  import MenuIcon from "@mui/icons-material/Menu";
  import styled from "styled-components";
  
  export const Container = styled.div`
    height: 60px;
    line-height: 60px;
    margin-bottom: 150px;
    
  `;
  
  export const Wrapper = styled.div`
    height: 100%;
    padding: 30px 20px;
    flex-direction: column;
    gap: 3%;
  
  `;
  
  export const Left = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  
  export const Logo = styled.div`
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 600;
  `;
  
  /**Right */
  
  export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  
  export const CartContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  
  export const CartIcon = styled(ShoppingCartOutlined)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  `;
  
  export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 15px;
  `;
  
  export const UserIcon = styled(Person2Outlined)`
     color: ${({ theme }) => theme.colors.primary};
  `;
  
  export const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
  `;
  
  export const IconMenu = styled(MenuIcon)`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  `;
  
  /**  Center */
  
  export const Center = styled.div`
    flex: 3;
    margin: 20px 0px;
   
  `;
  
  export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    padding: 10px;
  `;
  

  export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  export const Input = styled.input`
    outline: none;
    border: none;
    width: 100%;
  `;
  
  export const SearchIcon = styled(SearchOutlined)`
    color: gray;
    cursor: pointer;
  
    &:hover {
      transform: scale(1.4);
      transition: all 0.5s ease;
    }
  `;
  