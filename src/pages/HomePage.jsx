import React from 'react'
import HeaderDesktop from '../component/header/header.components'
import PrimarySlider from '../component/slider/slider.component'
import "../responsive.css";
import HeaderMobile from '../component/header-mobile/header-mobile.component';




const HomePage = () => {
  return (
    <>
      <div className="Desktop">
        <HeaderDesktop />
      </div>
      <div className="Mobile">
        <HeaderMobile />
      </div>

      <PrimarySlider />
    </>
  )
}

export default HomePage