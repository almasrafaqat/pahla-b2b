import React from 'react'
import PrimarySlider from '../component/slider/slider.component'
import Header from '../component/header/header.components';
import ProductsTabs from '../component/product-tabs/product-tabs.components';




const HomePage = () => {
  return (
    <>
      <Header />
      <PrimarySlider />
      <ProductsTabs/>
    </>
  )
}

export default HomePage