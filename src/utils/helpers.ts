// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
export const priceFormat = (price: number) =>
  price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
