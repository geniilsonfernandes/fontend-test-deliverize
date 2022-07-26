import React, { createContext, useContext, useEffect, useState } from "react";
import P from "prop-types";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const historyPlaceLocalStringify = localStorage.getItem("cart");
    const historyPlaceLocal = JSON.parse(historyPlaceLocalStringify) || [];
    return historyPlaceLocal;
  });
  const [cartLenght, setCartLenght] = useState(0);
  const [cartNotification, setCartNotification] = useState({});

  const dispatchNotification = (orderAsNotification) => {
    setCartNotification(orderAsNotification);
  };

  const addOrderToCart = (order) => {
    setCart((prev) => [...prev, order]);
    dispatchNotification(order);
  };


  const removeOrderToCart = (uid) => {
    const orderFilterd = cart.filter(item => item.uid !== uid)
    setCart(orderFilterd);
  };

  useEffect(() => {
    setCartLenght(cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <OrderContext.Provider
      value={{ addOrderToCart, cart, cartNotification, cartLenght, removeOrderToCart, dispatchNotification }}
    >
      {children}
    </OrderContext.Provider>
  );
};

OrderProvider.propTypes = {
  children: P.node
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
