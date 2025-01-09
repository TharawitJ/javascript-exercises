const fibonacci = function(Number) {
    let array = []
    for(i=0; i < Number; i++)
        if((i == 0) || (i == 1)) {
            array.push(1);
        } else {
            array.push(array.at(i-1) + array.at(i-2));
        }
    return array.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;

