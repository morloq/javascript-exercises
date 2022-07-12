const add = function(input1, input2) {
	if(!isNaN(input1) && !isNaN(input2)) {
    return input1 + input2;
  }
  else if(input1.length == 0 && input2.length == 0) {
    return 0;
  }
  else if (input1.length == 0 && input2.length != 0) {
    return input2;
  }
  else if(input1.length != 0 && input2.length == 0) {
    return input1;
  }
  else return "ERROR";
};

const subtract = function(input1, input2) {
  if(!isNaN(input1) && !isNaN(input2)) {
    return input1 - input2;
  }
  else if(input1.length == 0 && input2.length == 0) {
    return 0;
  }
  else if (input1.length == 0 && input2.length != 0) {
    return input2;
  }
  else if(input1.length != 0 && input2.length == 0) {
    return input1;
  }
  else return "ERROR";
};

const sum = function(input) {
	if(input.length == 0) {
    return 0;
  }
  else if(input.length == 1) {
    return input[Object.keys(input)[0]];//returns value assigned to first key
  }
  else{
    let sum = 0;
    Object.values(input).forEach(val => sum += val);
    return sum;
  }
};

const multiply = function(input) {
  if(input.length == 0) {
    return 0;
  }
  else if(input.length == 1) {
    return input[Object.keys(input)[0]];
  }
  else{
    let sum = 1;
    Object.values(input).forEach(val => sum *= val);
    return sum;
  }
};

const power = function(base, exponent) {
	if(isNaN(base) || isNaN(exponent)) {
    return "ERROR";
  }
  else {
    return Math.pow(base, exponent);
  }
};

const factorial = function(input) {
	if(input == 0){
    return 1;
  }
  else if(input == 1) {
    return 1;
  }
  else {
    let factorial = 1;
    for(i = input; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  }
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
