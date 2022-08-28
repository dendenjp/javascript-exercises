const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    const sumOfAll = arr.reduce((a, b) => a + b, 0);
    return sumOfAll;
};

const multiply = function (arr) {
    const multiplyAll = arr.reduce((a, b) => a * b);
    return multiplyAll;
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (num) {
    if (num === 0) return 1;
    else {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }
        const answer = arr.reduce((a, b) => a * b);
        return answer;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
