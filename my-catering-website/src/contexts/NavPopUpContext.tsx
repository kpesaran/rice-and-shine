import React, { createContext, useState, useContext, FC } from 'react';

import { JsxElement } from 'typescript';

interface NavPopUpContextProps {
  isNavPopUpOpen: boolean;
  toggleNavPopUp: () => void;
}

const NavPopUpContext = createContext<NavPopUpContextProps>({
  isNavPopUpOpen: false,
  toggleNavPopUp: () => {},
});

export function NavPopUpProvider({ children }: {children: JSX.Element})  {
  const [isNavPopUpOpen, setNavPopUpOpen] = useState(false);
  const toggleNavPopUp = () => setNavPopUpOpen(!isNavPopUpOpen);

  return (
    <NavPopUpContext.Provider value={{ isNavPopUpOpen, toggleNavPopUp }}>
      {children}
    </NavPopUpContext.Provider>
  );
};

export function useGlobalState() {
    return useContext(NavPopUpContext);
  }
