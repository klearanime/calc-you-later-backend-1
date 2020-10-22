/******************
 * YOUR CODE HERE *
 ******************/

const calculate = function(num1, num2, operation) {
  num1 = Number(num1)
  num2 = Number(num2)

  const plus = operation === '+' || operation === 'plus' || operation === 'added to';
  const minus = operation === '-' || operation === 'minus' || operation === 'subtracted from';
  const times = operation === 'x' || operation === 'X' || operation === 'times';
  const dividedBy = operation === '/' || operation === 'divided by';
  const modBy= operation === '%' || operation === 'modulus' || operation === 'mod';

  if (plus) {
    return num1 + num2 
  } else if (minus) {
    return num1 - num2
  } else if (times) {
    return num1 * num2
  } else if (dividedBy) {
    return num1 / num2
  } else if (modBy) {
    return num1 % num2
  } else {
    return "Sorry, that's not a mathematical operation!"
  }
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;