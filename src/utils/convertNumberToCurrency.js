export function convertNumberToCurrency(value, currency) {
  const convert = (v) =>
    v.toLocaleString("pt-br", {
      style: "currency",
      currency: currency
    });
  return value ? convert(value) : convert(0.0);
}
