import { OrderList } from ".";

export default {
  title: "delivery/OrderList",
  component: OrderList
};

const mockItems = [1, 2, 3, 4];

export const Default = (args) => <OrderList {...args} />;

Default.args = {
  items: mockItems,
  itemsLimiter: 8,
  onDispatchOrder: () => {}
};
