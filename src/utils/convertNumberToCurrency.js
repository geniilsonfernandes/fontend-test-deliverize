export function convertNumberToCurrency(value, currency) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: currency
  });
  return newValue;
}
