/* eslint-disable linebreak-style */
export default function calculateTotal(purchases, appluDiscount) {
  const sum = purchases.reduce((acc, item) => acc + (item.count * item.price), 0);
  if (appluDiscount) {
    return sum * 0.5;
  }
  return sum;
}
