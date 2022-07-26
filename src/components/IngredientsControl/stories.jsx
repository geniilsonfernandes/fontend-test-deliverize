import { IngredientsControl } from ".";

export default {
  title: "delivery/IngredientsControl",
  component: IngredientsControl
};

export const Default = (args) => <IngredientsControl {...args} />;

Default.args = {
  onIncremental: () => { },
  onDecremental: () => { },
  onRemoveItem: () => { },
  onCounter: () => { },
  itemCounter: 1,
  limiter: 8,
  max: 8,
  price: 4.99,
  label: "Queijo cheddar"
};
