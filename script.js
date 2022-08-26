//Задание 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 потому что с помощью бинарного + увеличиваем показатель а на 1
d = b++; alert(d);           // 1 потому что применена постфиксная запись следовательно при выхове применяется значение до инкремента
c = (2 + ++a); alert(c);     // 5 поскольку при применении префиксной записи возврращается новое выражение, а выше а уже увеличили на 1, таким образом получается выражение 2 + 3. Ключевой момент: вызываем c
d = (2 + b++); alert(d);     // 4 поскольку применялась постфиксная запись, то берем изначальное значение b и увеличиваем на 1, получая выражение 2 + 2. Ключевой момент: вызываем d
alert(a);                    // 3 выше дважды увеличили на 1
alert(b);                    // 3 выше дважды увеличили на 1

//Задание 2

var a = 2;
var x = 1 + (a *= 2);        // x будет равен 5 поскольку используя оператор *= мы умножили а на 2 и сохранили результат в а

// Задание 3

let a = -15;
let b = 5;

if (a >= 0 && b >= 0 && a > b) {
    console.log(a - b);
} else if (a >= 0 && b >= 0 && a < b) {
    console.log(b - a);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

// Задание 4

let a = 10;

switch (a) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;                  // код работает и без break, но на всякий случай оставил
}

// Задание 5

function sum(a, b) {
    console.log(a + b);
    return (a + b);
}

function substraction(a, b) {   // сделал дополнительное условие для себя, чтобы результат был положительным числом
    if (a >= b) {
        console.log(a - b);
        return a - b;
    } else {
        console.log(b - a);
        return (b - a);
    }
}

function multiplacation(a, b) {
    console.log(a * b);
    return (a * b);
}

function division(a, b) {
    console.log(a / b);
    return (a / b);
}