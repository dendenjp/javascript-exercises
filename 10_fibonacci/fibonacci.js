const fibonacci = function (num) {
    let inputNumber = Number(num);
    let firstNumber = 0;
    let secondNumber = 1;

    let nextNumber = 0;

    let myFiboArr = [];

    if (inputNumber < 0) return 'OOPS';

    for (let i = 0; i <= inputNumber; i++) {
        myFiboArr.push(firstNumber);

        nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
    }

    let lastNumber = myFiboArr[myFiboArr.length - 1];

    return lastNumber;
};

// Do not edit below this line
module.exports = fibonacci;
