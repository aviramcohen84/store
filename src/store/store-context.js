import React, { useReducer, createContext } from "react";
import initialState from './initialState';
import reducer from "./reducer";

export const StoreContext = createContext();

export const StoreContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  );
};