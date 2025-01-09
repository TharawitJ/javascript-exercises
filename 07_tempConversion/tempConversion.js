const convertToCelsius = function(temperature) {
  Fahrenheit = temperature - 32;
  return Fahrenheit;
};

const convertToFahrenheit = function(temperature) {
  Celsius = temperature + 32;
  return Celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};