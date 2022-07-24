import { IngredientsControl } from ".";

export default {
  title: "IngredientsControl",
  component: IngredientsControl
};

export const Default = (args) => <IngredientsControl {...args} />;

Default.args = {
  onIncremental: () => {},
  onDecremental: () => {},
  onRemoveItem: () => {},
  onCounter: () => {},
  limiter: 8,
  price: 4.99,
  label: "Queijo cheddar"
};
