import { IconSearch, Link, SearchContainer } from "../../globalStyle"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import Input from "../input/input.component"
import { Header, Logo, MainContainer, Navigation } from "./header.style"

const HeaderDesktop = () => {

  return (
    <MainContainer>
      <Header>
        <Logo src="/img/logo/pahla-store-logo.png" />
        <Navigation>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">American T-Shirts</Link></li>
            <li><Link to="/">Soccer Jerseys</Link></li>
            <li><Link to="/">Football Uniform</Link></li>
            <li><Link to="/">Baseball Uniform</Link></li>
            <li><Link to="/">Hoodies</Link></li>
          </ul>
        </Navigation>
        <SearchContainer>
        <Input placeholder="Search the product..." type="text" />
          <Button buttonType={BUTTON_TYPE_CLASSES.search_btn}>
            <IconSearch />Search
          </Button>
        </SearchContainer>
      </Header>
    </MainContainer>
  )
}

export default HeaderDesktop