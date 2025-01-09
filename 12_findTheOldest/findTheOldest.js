const findTheOldest = function(ThisMap) {
    let MaxYearDiff = 0;
    let oldest = "";
    for(i=0; i<ThisMap.length ; i++){
        const yearDiff = ThisMap[i].yearOfDeath - ThisMap[i].yearOfBirth;

        if(MaxYearDiff < yearDiff){
            MaxYearDiff = yearDiff;
            oldest = ThisMap[i];
        }
    }
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
