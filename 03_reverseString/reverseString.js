const reverseString = function(text) {
    reversedText = text.split("").reverse().join("");
    // Split to array and reverse then join
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;


/* 
-- Other option --
-- ForLoop -- 

for (let i = text.length(-1); i >= 0; 1--){}
reversedText += text[i];
};

-- reverseString -- 
return reverseString(text.slice(1)+text[0]);

-- Spread Operater [...text] == split -- 
let reversedText = [...text].reverse().join("");

-- Array Stacking -- 
let stack = text.split("");
let reversedText = "";
while (stack.length > 0) {
    reversedText += stack.pop();
*/