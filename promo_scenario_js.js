function discount(items, promoCode) {
  let allDiscount = 0;
  if (promoCode === "") {
    return 0;
  }
  let discountNum = 10;

  let arrProduct = [
    ["payung", 100000],
    ["cangkir", 90000],
    ["botol", 150000],
    ["meja", 100000000],
  ];

  arrProduct = arrProduct.forEach((item) => {
    items.forEach((orderItem) => {
      if (item[0] === orderItem[0]) {
        let totalPriceOfProduct = item[1] * orderItem[1];
        let discountItem = 0;
        if (item[1] >= 100000) {
          discountItem = (totalPriceOfProduct * discountNum) / 100;
        }
        allDiscount += discountItem;
        if (allDiscount > 1000000) {
          allDiscount = 1000000;
        }
      }
    });
  });

  return allDiscount;
}
console.log(
  discount(
    [
      ["botol", 4],
      ["cangkir", 1],
      ["payung", 1],
    ],
    "KDFJ"
  )
);
