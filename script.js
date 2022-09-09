// Задание 1

const gridStyle = `display: grid;
    grid-template-columns : 20px  repeat(8, 50px);
    grid-template-rows: 20px repeat(8, 50px);
    justify-items: center;
    align-items: center;`

function makeChessBoard() {
  const board = document.createElement('div')
  board.style = gridStyle

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div')
      if (i === 0 || j === 0) {
        cell.innerText = (j) ? String.fromCharCode(64 + j) : i || ""
      } else {
        cell.style.width = "100%"
        cell.style.height = "100%"
        if (i % 2) cell.style.backgroundColor = j % 2 ? '#f1d264' : '#4f3e07'
        else cell.style.backgroundColor = !(j % 2) ? '#f1d264' : '#4f3e07'
      }
      board.appendChild(cell)
    }
  }
  document.body.prepend(board)
}

makeChessBoard()



// Задание 2

/*let obj = {
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

obj.basketRender();*/