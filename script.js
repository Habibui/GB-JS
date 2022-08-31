// Задание 1

/*let i = 0;

while (i <= 100) {
    console.log(i)
    i++;
}*/

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