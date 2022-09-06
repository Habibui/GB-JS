// Задание 1

/*function myFn(userNumber) {
  if (userNumber < 999) {
    const stats = {
        'units': Math.floor(userNumber % 10),
        'dozens': Math.floor(userNumber % 100 / 10),
        'hundreds': Math.floor(userNumber / 100)
        }
        return stats;
  } else {
        console.log('введено некорректное число')
  }
}*/


// Задание 2

let objBasket = [{
  name: 'apple',
  count: 1,
  price: 50
},
{
  name: 'pineapple',
  count: 2,
  price: 70
},
{
  name: 'banan',
  count: 1,
  price: 30
}]

function countBasketPrice() {
  let totalSum = 0;
  for (let index = 0; index < objBasket.length; index++) {
    totalSum += objBasket[index].count * objBasket[index].price;
  }
  console.log(totalSum);
  return totalSum;
}

countBasketPrice();