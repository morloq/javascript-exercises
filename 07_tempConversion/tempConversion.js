const ftoc = function(fahrenheit) {
  let output = (fahrenheit -32) * 5/9;
  return Math.round(output * 10) / 10;
};

const ctof = function(celsius) {
  let output = celsius * 9/5 +32;
  return Math.round(output * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
