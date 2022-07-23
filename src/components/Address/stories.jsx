import { Address } from ".";

export default {
  title: "Address",
  component: Address
};

export const Default = (args) => <Address {...args} />;

Default.args = {
  currentAddress: "R. Antonio Braune, 222"
};
