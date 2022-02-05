const sumAll = function(firstNum, secondNum) {
    let sum = 0;
        if ((firstNum < 0) || (secondNum < 0) || (typeof(firstNum)!== 'number') || (typeof(secondNum)!== 'number')) {
            return sum = 'ERROR';
        }
        else if (firstNum > secondNum) {
            for ( let i = firstNum; i >= secondNum; i--) { 
                sum = sum + i;
            };
        } else if (firstNum < secondNum) {
            for (let i = firstNum; i <= secondNum; i++){
                sum = sum + i;
            };   
        } 
        console.log(sum);
        return sum;
    };

// Do not edit below this line
module.exports = sumAll;
