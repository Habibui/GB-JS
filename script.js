// Задание 1

/*
let i = 2;

while (i > 0 && i <= 100) {
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
    console.log(i);
  } else if (i == 2 || i == 3 || i == 5 || i == 7) {
    console.log(i);
  }
  i++;
}
*/

// Задание 2

let arrayBasket = [
    ['apple', 1, 50],
    ['pineapple', 2, 70],
    ['banan', 1, 30],
];

function countBasketPrice() {
    let totalSum = 0;
    for (let index = 0; index < arrayBasket.length; index++) {
        totalSum += arrayBasket[index][1] * arrayBasket[index][2];
    }
    console.log(totalSum);
    return totalSum;
}

countBasketPrice();