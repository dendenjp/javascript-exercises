const ftoc = function (fnum) {
  // C = F - 32 * (5/9)
  let celsius = (fnum - 32) * (5 / 9);
  let roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const ctof = function (cnum) {
  // F = (C * 1.8) + 32
  let fahrenheit = cnum * 1.8 + 32;
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
