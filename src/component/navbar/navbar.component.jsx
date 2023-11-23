import React from 'react'
import {  HeaderWrapper, IconBody, IconsContainer, NavbarContainer, Navigation } from './navbar.style'
import { Link, QuotationIcon, SampleIcon } from '../../globalStyle'


const Navbar = () => {
  return (
    <NavbarContainer>
      <HeaderWrapper>
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
        <IconBody>
          <Link to="">
            <IconsContainer>
              <QuotationIcon />
              <span style={{ marginLeft: "5px" }}>Request for Quotation</span>
            </IconsContainer>
          </Link>
          <Link to="">
            <IconsContainer>
              <SampleIcon />
              <span style={{ marginLeft: "5px" }}>Request for Sample</span>
            </IconsContainer>
          </Link>
        </IconBody>
      </HeaderWrapper>
    </NavbarContainer>
  )
}

export default Navbar;