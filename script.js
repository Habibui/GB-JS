// Задание 1

/*function myFn(userNumber) {
  if (0 < userNumber && userNumber < 999) {
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

let obj = {
  basket: [{
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
  }],

  countBasketPrice: function () {
    let totalSum = 0;
    for (let index = 0; index < this.basket.length; index++) {
      totalSum += this.basket[index].count * this.basket[index].price;
    }
    console.log(totalSum);
    return totalSum;
  }
}

obj.countBasketPrice();