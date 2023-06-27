import React, { createContext, useContext, useReducer } from "react";
import data from "../db/data.js";
import { cartReducer, productReducer } from "./Reducers.js";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...data];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byCategory: 'all',
    byPrice: 'all',
    byColor: "all",
    byBrand: "all",
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
