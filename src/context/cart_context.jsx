import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(); //create context for cart
//add a counter for the number of items in the cart
const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return { ...state, cart: [] };
    case "ADD":
      const { id, amount, products, color } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (product) => product.id === id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = state.cart.map((product, index) => {
          if (index === existingItemIndex) {
            return { ...product, amount: product.amount + amount };
          }
          return product;
        });
        return { ...state, cart: updatedCart };
      } else {
        const newItem = {
          id,
          amount,
          price: products.price,
          name: products.name,
          image: products.image,
          color,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case "INC_PROD":
      const updatedCartInc = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });
      return { ...state, cart: updatedCartInc };
    case "DEC_PROD":
      const updatedCartDec = state.cart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      });
      return { ...state, cart: updatedCartDec };
    case "DEL":
      const updatedCartDel = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      return { ...state, cart: updatedCartDel };
    default:
      return state;
  }
};

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clear = () => {
    dispatch({ type: "CLEAR" });
  };

  /* const add = (id, amount, selectedSize, products, color, size) => {
    dispatch({
      type: "ADD",
      payload: { id, amount, selectedSize, products, color, size },
    });
  }; */

  const add = (id, amount, products, color, size) => {
    const existingItemIndex = state.cart.findIndex(
      (product) => product.id === id
    );

    if (existingItemIndex !== -1) {
      dispatch({
        type: "INC_PROD",
        payload: state.cart[existingItemIndex].id,
      });
    } else {
      dispatch({
        type: "ADD",
        payload: { id, amount, products, color, size },
      });
    }
  };

  const incProd = (id) => {
    dispatch({ type: "INC_PROD", payload: id });
  };

  const decProd = (id) => {
    dispatch({ type: "DEC_PROD", payload: id });
  };

  const del = (id) => {
    dispatch({ type: "DEL", payload: { id } });
  };

  return (
    <CartContext.Provider
      value={{ ...state, clear, add, incProd, decProd, del }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext); //create custum hook
};

export { CartContext, CartProvider }; //export cart context and Cart Provider
