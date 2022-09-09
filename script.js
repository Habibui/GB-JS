// Задание 1

/*
const board = {
  const cell = document.createElement('div'),
  rowCount: 8;
  colCount: 8
};

function makeChessBoard() {
const board = document.createElement('div');

let isBlack = true;
for (let y = 0; y < 9; y++) {
  for (let x = 0; x < 9; X++) {
    const cell = document.createElement('div');
    let color = 'white'
    if (isBlack) {
      color = 'black';
            isBlack = false;
    } else {
      isBlack = true;
    }
  }
}
}

makeChessBoard();
*/


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
  },

  basketRender: function () {
    let myBasket = document.querySelector(".basket");
    if (this.basket.length != null) {
      console.log(`В корзине: ${this.basket.length} товаров на сумму  ${this.countBasketPrice()} рублей`);
    } else {
      console.log('Корзина пуста');
    }
  }
}

obj.basketRender();