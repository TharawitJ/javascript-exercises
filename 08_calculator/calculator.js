const add = function(Number1 = 0 ,Number2 = 0) {
	result = Number1 + Number2;
  return result;
};

const subtract = function(Number1 = 0 ,Number2 = 0) {
	result = Number1 - Number2;
  return result;
};

const sum = function(Number1 = 0 ,Number2 = 0) {
	result = Number1 + Number2;
  return result;
};

const multiply = function(Number1 = 0 ,Number2 = 0) {
  result = Number1 * Number2;
  return result;
};

const power = function(Number1 = 0 ,Number2 = 0) {
  result = Number1 ^ Number2;
  return result;
};

const factorial = function(Number1 = 0 ,Number2 = 0) {
	for(i = Number1;i<= Number2; i++){
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
