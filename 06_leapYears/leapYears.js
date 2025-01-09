const leapYears = function(years) {
    if (years % 400 === 0){
        result = true;
    } else if((years % 4 === 0) && (years % 100 !== 0)){
        result = true;
    } else {
        result = false;
    }
    return result;
};

// Do not edit below this line
module.exports = leapYears;
