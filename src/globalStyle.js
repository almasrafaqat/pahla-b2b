import { AddTask, ArrowLeftOutlined, ArrowRightOutlined, ClearSharp, DevicesFold, DraftsOutlined, Facebook, Instagram, MenuOutlined, PersonOutline, PlaceOutlined, SearchOutlined, ShoppingCartOutlined, TtyOutlined, Twitter, YouTube } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { IpadTablets, Mobile } from "./responsive";


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
  }
`;

export const theme = {
  colors: {
    primary: "#FFA33C",
    secondary: "#20B2AA",
    hover: "#20B2AA",
    white: "#fff",
    black: " #253d4e",
    lightblack: "#00000094",
    border: "#ececec",
    gray: "#adadad",
    lightgray: "#f7f7f6",
    lightlowgray: "#ececec47",
    star: "#ffaa0f",
    red: "#cc0c39",
    lightred: "#fcadad",
    cardhover: "translate(0px, -8px)",
    transition: "all 0.3s ease-in-out",
    footer_bg: "#0a1435",
    shadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
  },
};

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

export const SliderButton = styled.div`
  position: absolute;
  width: 50px;
  height: 150px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "0.5rem"};
  right: ${(props) => props.direction === "right" && "0.5rem"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${Mobile({ width: "30px", height: "100px", borderRadius: "4px" })}
  ${IpadTablets({ width: "40px", height: "120px", borderRadius: "5px" })}

`;

export const ArrowRight = styled(ArrowRightOutlined)`
  font-size: 2rem!important;
`;

export const ArrowLeft = styled(ArrowLeftOutlined)`
  font-size: 2rem!important;
`;

export const IconSearch = styled(SearchOutlined)`
  font-size: 1.2rem!important;
`

export const CartIcon = styled(ShoppingCartOutlined)`
  font-size: 2rem!important;
  cursor: pointer;
`;
export const UserIcon = styled(PersonOutline)`
  font-size: 2rem!important;
  cursor: pointer;
`;
export const DraftIcon = styled(DraftsOutlined)`
  font-size: ${(props) => props.size ? '1.5rem' : '2rem'}!important;
  cursor: pointer;
  color: ${(props) => props.primary ? ({ theme }) => theme.colors.primary : 'black'};
`;
export const QuotationIcon = styled(AddTask)`
  font-size: 2rem!important;
  cursor: pointer;
`;
export const SampleIcon = styled(DevicesFold)`
  font-size: 2rem!important;
  cursor: pointer;
`;
export const MenuIcon = styled(MenuOutlined)`
  font-size: 2rem!important;
  cursor: pointer;
`;
export const CloseIcon = styled(ClearSharp)`
  cursor: pointer;

  &:hover {
      transform: scale(1.4);
      transition: all 0.3s ease-in-out;
    }
`;

export const LocationIcon = styled(PlaceOutlined)`
    color: ${({ theme }) => theme.colors.primary};
  `;


export const TelephoneIcon = styled(TtyOutlined)`
    color: ${({ theme }) => theme.colors.primary};
  `;

export const FacebookIcon = styled(Facebook)``;

export const YoutubeIcon = styled(YouTube)``;

export const TwitterIcon = styled(Twitter)``;

export const InstagramIcon = styled(Instagram)``;


export const SearchContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 5px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.white}; ;
  height: 50px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.colors.shadow}; 

  ${Mobile({ width: "95%" })}
  ${IpadTablets({ width: "95%" })}
`;