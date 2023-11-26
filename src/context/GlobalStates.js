import { createContext, useContext, useState } from "react"
import { Products } from "../data";


const GlobalState = createContext();

export const GlobalStateProvider = ({children}) => {

  /**Open Sidebar for Mobile View */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const AllProducts = [...Products];

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    AllProducts,
  }

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>

}

export const useGlobalState = () => {
  return useContext(GlobalState);
}