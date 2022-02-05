const removeFromArray = function(arr, ...num) {
                let answer = [];
                for (let i = 0; i < arr.length; i++) {
                    if (num.indexOf(arr[i]) === -1) { //if the element of arr doesn't exist in the "num" array, push that element into the answer array.
                        answer.push(arr[i]); //answer.push(testArray[0]) will look like answer.push(6). Now, the "answer" array will contain "6"
                    }
                };
                console.log("answer is "+answer);
                return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
