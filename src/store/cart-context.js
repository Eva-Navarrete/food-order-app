import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeId: (id) => {},
  clearCart: () => {},
});

export default CartContext;
