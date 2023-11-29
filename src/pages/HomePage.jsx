import React from 'react'
import PrimarySlider from '../component/slider/slider.component'
import Header from '../component/header/header.components';
import ProductsTabs from '../component/product-tabs/product-tabs.components';
import { useGlobalState } from '../context/GlobalStates';




const HomePage = () => {
  const { AllProducts, newSortedProducts, sortedProductsByRating, sortedProductsBySales } = useGlobalState();


  return (
    <>
      <Header />
      <PrimarySlider />
      <ProductsTabs
        prductNumber={3}
        productGrid={9}
        newArrivalsLabel="New Arrivals"
        newArrivals={newSortedProducts}
        topRankingLabel="Top Ranking"
        topRanking={sortedProductsByRating}
        hotSellingLabel="Hot Selling"
        hotSelling={sortedProductsBySales}

      />
      <ProductsTabs
        sectionHeading="Top Trendy"
        prductNumber={1}
        productDir='column'
        categoryWiseProducts={AllProducts}
      />
    </>
  )
}

export default HomePage