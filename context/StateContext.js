import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { CartProvider, useCart } from "react-use-cart";

const Context = createContext();
export const StateContext = ({ children }) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
  } = useCart();

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    toast.success(`${1} ${product.name} added to the cart.`);
    setTotalQuantities(totalQuantities + 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * 1);
    product.quantity = quantity;
    setCartItems([...cartItems, { ...product }]);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * 1);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        items,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
