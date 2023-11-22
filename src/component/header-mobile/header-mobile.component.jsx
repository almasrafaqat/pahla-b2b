import { Badge } from "@mui/material";


import {
  CartContainer,
  CartIcon,
  Center,
  Container,
  IconMenu,
  IconWrapper,
  Input,
  InputContainer,
  Left,
  Logo,
  MenuIconContainer,
  SearchContainer,
  SearchIcon,
  UserContainer,
  UserIcon,
  Wrapper,
} from "./header-mobile.style";


const HeaderMobile = () => {
  
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>Almas.</Logo>
            <IconWrapper>
              <CartContainer>
                <Badge badgeContent="0" color="success">
                  <CartIcon style={{ fontSize: "24px" }} />
                </Badge>
              </CartContainer>
              <UserContainer>
                <UserIcon style={{ fontSize: "28px" }} />
              </UserContainer>
              <MenuIconContainer
                
              >
              
              </MenuIconContainer>
            </IconWrapper>
          </Left>
          <Center>
            <SearchContainer>
           
              <InputContainer>
                <Input placeholder="Searh the Products" />
                <SearchIcon />
              </InputContainer>
            </SearchContainer>
          </Center>
        </Wrapper>
      </Container>
     
    </>
  );
};

export default HeaderMobile;
