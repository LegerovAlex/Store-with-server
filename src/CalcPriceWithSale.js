function toPoint(percent) {
  let str = percent;
  str = str / 100;
  return str;
}

export function CalcPriceWithSale(priceLast, percent) {
  const priceNow = priceLast - priceLast * toPoint(percent);
  return Math.floor(priceNow);
}
