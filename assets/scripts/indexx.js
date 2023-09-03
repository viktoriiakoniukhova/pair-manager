var prices = [
  { id: 1, price: 23 },
  { id: 5, price: 3 },
  { id: 8, price: 2 },
];
var cart = [1, 1, 8];

var sum = 0;
const pricesObj = {
  1: 23,
  5: 3,
  8: 2,
};

cart.forEach((num) => {
  sum += pricesObj[num];
});

console.log(sum);
