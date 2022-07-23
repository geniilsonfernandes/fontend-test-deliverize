import { Product } from ".";
import mock from "./mock";

export default {
  title: "Product",
  component: Product
};

export const Default = (args) => <Product {...args} />;

Default.args = {
  ...mock
};

export const isPromotional = (args) => <Product {...args} />;
isPromotional.args = {
  ...mock,
  promotionalPrice: 31.99
};
