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

  const dispatchNotification = (message) => {
    setCartNotification(message);
  };

  const addOrderToCart = (order) => {
    setCart((prev) => [...prev, order]);
    dispatchNotification(order);
  };

  useEffect(() => {
    setCartLenght(cart.length);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <OrderContext.Provider
      value={{ addOrderToCart, cart, cartNotification, cartLenght }}
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
