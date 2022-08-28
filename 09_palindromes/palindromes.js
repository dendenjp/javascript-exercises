const palindromes = function (string) {
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    // converting to lowercase and removing spaces
    let myString = string.toLowerCase().split(' ').join('');

    // removing punctuation
    let myArr = Array.from(myString).filter((punc) => {
        return punctuation.indexOf(punc) === -1;
    });
    //converting array to string(this will be the string input)
    let inputString = myArr.join('');

    // reversing array
    let reversedArr = myArr.reverse();

    // converting reversed array to string
    let reversedString = reversedArr.join('');

    // check condition
    return inputString === reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
