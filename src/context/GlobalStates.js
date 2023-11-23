import { createContext, useContext, useState } from "react"


const GlobalState = createContext();

export const GlobalStateProvider = ({children}) => {

  /**Open Sidebar for Mobile View */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = {
    isMenuOpen,
    setIsMenuOpen,
  }

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>

}

export const useGlobalState = () => {
  return useContext(GlobalState);
}