const removeFromArray = function(array,ToRemove) {
    filtered = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] !== ToRemove) {
            // push(add) values that !== ToRemove
            filtered.push(array[i]);
        }
    }
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;

/*
-- filter() --
let filteredArray = array.filter(item => item !== ToRemove);

-- by Search index --
let index = array.indexOf(ToRemove);
if (index !== -1) {
    array.splice(index, 1);
*/