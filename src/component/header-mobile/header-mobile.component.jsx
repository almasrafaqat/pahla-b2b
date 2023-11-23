import { useGlobalState } from "../../context/GlobalStates";
import { CloseIcon, DraftIcon, FacebookIcon, InstagramIcon, Link, LocationIcon, TelephoneIcon, TwitterIcon, YoutubeIcon } from "../../globalStyle";
import Navbar from "../navbar/navbar.component";
import { Container, CopyRightContainer, FlexContainer, Head, HeaderBody, HeaderFooter, HeaderMobileSection, IconBg, InfoContainer, Logo, SocialContainer } from "./header-mobile.style";



const HeaderMobile = () => {
  const {  setIsMenuOpen } = useGlobalState();
  return (
    <HeaderMobileSection>
      <Container>
        <Head>
          <Logo>
            <img src="./img/logo/pahla-store-logo.png" alt="newyousportslogo" />
          </Logo>
          <CloseIcon onClick={() => {
            setIsMenuOpen((boolen) => !boolen);
          }} />
        </Head>
        <HeaderBody>
          <Navbar />
        </HeaderBody>
        <HeaderFooter>
          <InfoContainer>
            <FlexContainer>
              <LocationIcon />
              <span style={{ fontSize: "14px" }}>Kashmir Road Pacca Garah Sialkot, Pakistan</span>
            </FlexContainer>
            <FlexContainer>
              <DraftIcon primary="true" size="true" />
              <Link to="mailto:info@newyousports.pk">info@newyousports.pk</Link>
            </FlexContainer>
            <FlexContainer>
              <TelephoneIcon />
              <Link to="tel:1-562-867-5309">+92-3157961436</Link>
            </FlexContainer>
          </InfoContainer>
          <SocialContainer>
            <b>Follow Us</b>
            <FlexContainer>
              <Link>
                <IconBg>
                  <FacebookIcon />
                </IconBg>
              </Link>
              <Link>
                <IconBg>
                  <YoutubeIcon />
                </IconBg>
              </Link>
              <Link>
                <IconBg>
                  <TwitterIcon />
                </IconBg>
              </Link>
              <Link>
                <IconBg>
                  <InstagramIcon />
                </IconBg>
              </Link>
            </FlexContainer>
            <CopyRightContainer>
              <FlexContainer>
                Copyright 2023 - {new Date().getFullYear()} © New You Sports. All
                rights reserved.Powered by AlmasThemes.
              </FlexContainer>
            </CopyRightContainer>
          </SocialContainer>
        </HeaderFooter>
      </Container>
    </HeaderMobileSection>
  );
};

export default HeaderMobile;
