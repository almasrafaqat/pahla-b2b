import { CartIcon, DraftIcon, IconSearch, Link, SearchContainer, UserIcon } from "../../globalStyle"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import Input from "../input/input.component"
import { AccountLinks, Header, Logo, MainContainer } from "./header.style"

const HeaderDesktop = () => {

  return (
    <MainContainer>
      <Header>
        <Link to="/"><Logo src="/img/logo/pahla-store-logo.png" /></Link>
        <SearchContainer>
          <Input placeholder="Search the product..." type="text" />
          <Button buttonType={BUTTON_TYPE_CLASSES.search_btn}>
            <IconSearch />Search
          </Button>
        </SearchContainer>
        <AccountLinks>
          <DraftIcon />
          <CartIcon />
          <UserIcon />
        </AccountLinks>
      </Header>
    </MainContainer>
  )
}

export default HeaderDesktop