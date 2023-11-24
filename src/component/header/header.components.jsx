import { Badge } from "@mui/material"
import { CartIcon, DraftIcon, IconSearch, Link, MenuIcon, SearchContainer, UserIcon } from "../../globalStyle"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import Input from "../input/input.component"
import Navbar from "../navbar/navbar.component"
import { AccountLinks, HeaderSection, Logo, MainContainer, TopHeader } from "./header.style"
import HeaderMobile from "../header-mobile/header-mobile.component";
import { useGlobalState } from "../../context/GlobalStates";
import "../../responsive.css";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalState();
  return (
    <HeaderSection>
      <MainContainer>
        <TopHeader>
          <Link to="/"><Logo src="/img/logo/pahla-store-logo.png" /></Link>
          <SearchContainer>
            <Input placeholder="Search the product..." type="text" />
            <Button buttonType={BUTTON_TYPE_CLASSES.search_btn}>
              <IconSearch />Search
            </Button>
          </SearchContainer>

          <AccountLinks>
            <div className="Mobile" onClick={() => {
              setIsMenuOpen((boolen) => !boolen);
            }}>
              <span>
                {!isMenuOpen && <MenuIcon />}
              </span>
            </div>
            <span>
              <Badge badgeContent="2" color="warning">
                <DraftIcon />
              </Badge>
            </span>
            <span>
              <Badge badgeContent="5" color="warning">
                <CartIcon />
              </Badge>
            </span>
            <UserIcon />
          </AccountLinks>
        </TopHeader>
      </MainContainer>
      <div className="Desktop">
        <Navbar />
      </div>
      {isMenuOpen && <HeaderMobile/>}
    </HeaderSection>
  )
}

export default Header;