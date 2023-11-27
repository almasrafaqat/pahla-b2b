import React from 'react'
import PrimarySlider from '../component/slider/slider.component'
import Header from '../component/header/header.components';
import ProductsTabs from '../component/product-tabs/product-tabs.components';
import { useGlobalState } from '../context/GlobalStates';




const HomePage = () => {
  const { newSortedProducts, sortedProductsByRating, sortedProductsBySales} = useGlobalState();
 
   
  return (
    <>
      <Header />
      <PrimarySlider />
      <ProductsTabs 
       newArrivals={newSortedProducts}
       topRanking={sortedProductsByRating}
       hotSelling={sortedProductsBySales}
       
      />
      <ProductsTabs
      sectionHeading="Top Trendy"
      prductNumber={2}
      productDir='column'
      topRanking={sortedProductsByRating}
      />
    </>
  )
}

export default HomePage