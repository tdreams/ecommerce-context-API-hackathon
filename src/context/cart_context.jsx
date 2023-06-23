import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(); // create context for cart

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return { ...state, cart: [] };
    case "ADD":
      const { id, amount, products, color } = action.payload; // change 'product' to 'products'
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount + amount };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        const newItem = {
          id,
          amount,
          price: products.price,
          name: products.name,
          image: products.image,
          category: products.category,
          color,
        };
        if (products.discount) {
          newItem.discount = products.discount;
          newItem.originalPrice = products.price;
        } else {
          newItem.price = products.price;
        }
        return { ...state, cart: [...state.cart, newItem] };
      }
    case "INC_PROD":
      const updatedCartInc = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + action.payload.amount }; // Increment by action.payload.amount instead of 1
        }
        return item;
      });
      return { ...state, cart: updatedCartInc };
    case "DEC_PROD":
      const updatedCartDec = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return { ...state, cart: updatedCartDec };
    case "DEL":
      const updatedCartDel = state.cart.filter(
        (item) => item.id !== action.payload.id
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

  const add = (id, amount, products, color, size) => {
    const existingItem = state.cart.find((item) => item.id === id);

    if (existingItem) {
      dispatch({
        type: "INC_PROD",
        payload: { id, amount }, // pass id and amount as a payload object
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
  return useContext(CartContext);
};

export { CartContext, CartProvider };
