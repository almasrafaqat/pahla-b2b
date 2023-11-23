import React from 'react'
import PrimarySlider from '../component/slider/slider.component'
import "../responsive.css";
import Header from '../component/header/header.components';


const HomePage = () => {
  return (
    <>
      <div className="Desktop">
        <Header />
      </div>
      <PrimarySlider />
    </>
  )
}

export default HomePage