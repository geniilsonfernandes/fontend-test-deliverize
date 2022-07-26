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
  <OrderContext.Provider value={{ cartLenght: args.counter, dispatchNotification: () => { }, cartNotification: {} }}>
    <div style={{ ...styles }}>
      <CartButton {...args} />
    </div>
  </OrderContext.Provider>
);

Default.args = {
  counter: 3,
};

export const withNotification = (args) => (
  <OrderContext.Provider value={{ cartLenght: args.counter, dispatchNotification: () => { }, cartNotification: { name: `item ${args.counter}`, orderQuantity: 1 } }}>
    <div style={{ ...styles }}>
      <CartButton {...args} />
    </div>
  </OrderContext.Provider>
);

withNotification.args = {
  counter: 3,
};

export const Small = (args) => (
  <OrderContext.Provider value={{ cartLenght: args.counter, dispatchNotification: () => { }, cartNotification: { name: `item ${args.counter}`, orderQuantity: 1 } }}>
    <div style={{ ...styles }}>
      <CartButton {...args} small />
    </div>
  </OrderContext.Provider>
);