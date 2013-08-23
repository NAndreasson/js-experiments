
var Calculator = function() {};

Calculator.prototype.add = function(numA, numB) {
  return numA + numB;
};

Calculator.prototype.subtract = function(numA, numB) {
  return numA - numB;
};

Calculator.prototype.multiply = function(numA, numB) {
  return numA * numB;
};

Calculator.prototype.divide = function(numA, numB) {
  return numA / numB;
};

exports.Calculator = Calculator;