import { ProductCart } from ".";

export default {
  title: "ProductCart",
  component: ProductCart
};

export const Default = (args) => <ProductCart {...args} />;

const additionalMock = [
  { amount: 1, price: 4.99, name: 'Queijo Cheddar' },
  { amount: 1, price: 1.5, name: 'Cebola Crispy' },
  { amount: 1, price: 3.5, name: 'Molho Cheddar' },
  { amount: 1, price: 3.5, name: 'Molho de Picanha' }
]

Default.args = {
  additional: additionalMock,
  name: "Oferta Picanha Cheddar Bacon",
  amount: 1,
  price: 34.95,
  uid: "uid1658815139448"
}

