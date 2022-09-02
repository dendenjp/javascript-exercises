const findTheOldest = function (obj) {
    // copying object. Don't want to mutate the original.
    const newObj = obj.map((el) => {
        return { ...el };
    });

    // adding current year to obj with no yearOfDeath
    newObj.forEach((el) => {
        if (!el.yearOfDeath) {
            el.yearOfDeath = new Date().getFullYear();
        }
    });

    // sorting by age. First element will be the oldest.
    const oldestPersonSort = newObj.sort((previousGuy, currentGuy) => {
        const prevGuy = previousGuy.yearOfDeath - previousGuy.yearOfBirth;
        const curGuy = currentGuy.yearOfDeath - currentGuy.yearOfBirth;

        if (prevGuy > curGuy) return -1;
        else return 1;
    });
    //return the first element of sorted array

    return oldestPersonSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
