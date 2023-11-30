import React from 'react'
import PrimarySlider from '../component/slider/slider.component'
import Header from '../component/header/header.components';
import ProductsTabs from '../component/product-tabs/product-tabs.components';
import { useGlobalState } from '../context/GlobalStates';
import FormComponent from '../component/form/form.component';





const HomePage = () => {
  const { AllProducts, productsByCategories, categories, newSortedProducts, sortedProductsByRating, sortedProductsBySales } = useGlobalState();

  const labels = ['Hot Ranking', 'New Arrivals', 'Hot Selling'];


  return (
    <>
      <Header />
      <PrimarySlider />
      <ProductsTabs
        categories={labels}
        productsByCategories={{ 'Hot Ranking': sortedProductsByRating, 'New Arrivals': newSortedProducts, 'Hot Selling': sortedProductsBySales }}
      />
      
      <FormComponent products={AllProducts} />
      <ProductsTabs
        prductNumber={2}
        productGrid={3}
        productDir='column'
        categories={categories}
        productsByCategories={productsByCategories}
      />
    </>
  )
}

export default HomePage