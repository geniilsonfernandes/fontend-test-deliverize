import { CartButton } from ".";
import { OrderContext } from "../../context/orderContext";

export default {
  title: "CartButton",
  component: CartButton
};

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export const Default = (args) => (
  <OrderContext.Provider value={{ cartLenght: args.counter, cartNotification: {} }}>
    <div style={{ ...styles }}>
      <CartButton {...args} />
    </div>
  </OrderContext.Provider>
);

Default.args = {
  counter: 3,
  cartNotification: {}
};

export const withNotification = (args) => (
  <OrderContext.Provider value={{ cartLenght: args.counter, cartNotification: { name: `item ${args.counter}`, orderQuantity: 1 } }}>
    <div style={{ ...styles }}>
      <CartButton {...args} />
    </div>
  </OrderContext.Provider>
);

withNotification.args = {
  counter: 3,
};
