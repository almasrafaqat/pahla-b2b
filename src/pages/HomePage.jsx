import React from 'react'
import PrimarySlider from '../component/slider/slider.component'
import Header from '../component/header/header.components';
import ProductsTabs from '../component/product-tabs/product-tabs.components';
import { useGlobalState } from '../context/GlobalStates';




const HomePage = () => {
  const {AllProducts} = useGlobalState();
  const FiveProducts = AllProducts.slice(5,10);
  
  return (
    <>
      <Header />
      <PrimarySlider />
      <ProductsTabs 
       allProducts={FiveProducts}
      />
      <ProductsTabs
      sectionHeading="Top Trendy"
      prductNumber={2}
      allProducts={AllProducts}
      productDir='column'
      />
    </>
  )
}

export default HomePage