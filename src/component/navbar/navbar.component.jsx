import React from 'react'
import { Header, HeaderSection, IconBody, IconsContainer, Navigation } from './navbar.style'
import {  Link, QuotationIcon, SampleIcon } from '../../globalStyle'


const Navbar = () => {
  return (
    <HeaderSection>
      <Header>
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
          <IconsContainer>
            <QuotationIcon />
            <span style={{ marginLeft: "5px" }}>Request for Quotation</span>
          </IconsContainer>
          <IconsContainer>
            <SampleIcon />
            <span style={{ marginLeft: "5px" }}>Request for Sample</span>
          </IconsContainer>
        </IconBody>


      </Header>
    </HeaderSection>
  )
}

export default Navbar;