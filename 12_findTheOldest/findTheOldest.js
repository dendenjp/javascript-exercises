const findTheOldest = function (obj) {
    const findOldestPerson = obj.sort((previousGuy, currentGuy) => {
        const prevGuy = previousGuy.yearOfDeath - previousGuy.yearOfBirth;
        const curGuy = currentGuy.yearOfDeath - currentGuy.yearOfBirth;

        if (prevGuy > curGuy) return -1;
        else return 1;
    });
    console.log(findOldestPerson);
    return findOldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
