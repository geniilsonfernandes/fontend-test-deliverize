import { CartButton } from ".";

export default {
  title: "CartButton",
  component: CartButton
};

export const Default = (args) => <CartButton {...args} />;
Default.args = {
  counter: 3
};
