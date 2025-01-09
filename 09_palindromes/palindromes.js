const palindromes = function (text) {
    lowerText = text.toLowerCase();
    replaceedText = lowerText.replace(/,|.|!/g,"")
    reversedText = replaceedText.split("").reverse().join("");
    if (reversedText === replaceedText){
        result = true
    } else {
        result = false
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
