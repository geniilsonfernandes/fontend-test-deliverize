import { CartButton } from ".";

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
  <div style={{ ...styles }}>
    <CartButton {...args} />
  </div>
);
Default.args = {
  counter: 3
};
