const sumAll = function(numStart,numEnd) {
    let totalValue = 0
    for(let i = numStart; i <= numEnd; i++){
        totalValue += i;
    }
    return totalValue;
};

// Do not edit below this line
module.exports = sumAll;
