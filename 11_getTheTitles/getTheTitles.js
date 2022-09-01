const getTheTitles = function (obj) {
    let titleArray = [];
    obj.forEach((el) => titleArray.push(el.title));
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
