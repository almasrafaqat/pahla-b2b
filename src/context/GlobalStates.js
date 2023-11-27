import { createContext, useContext, useState } from "react"
import { Products } from "../data";


const GlobalState = createContext();

export const GlobalStateProvider = ({children}) => {

  /**Open Sidebar for Mobile View */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const AllProducts = [...Products];

  // Sort the products based on their IDs
    const newSortedProducts = [...Products].sort((a, b) => b.id - a.id);

  // Sort products by rating in descending order (from highest to lowest)
  const sortedProductsByRating = [...Products].sort((a, b) => b.rating - a.rating);

  // Sort products by sales in descending order (from highest to lowest)
  const sortedProductsBySales = [...Products].sort((a, b) => b.views - a.views);

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    AllProducts,
    newSortedProducts,
    sortedProductsByRating,
    sortedProductsBySales,
  }

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>

}

export const useGlobalState = () => {
  return useContext(GlobalState);
}