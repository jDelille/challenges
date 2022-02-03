function multiply(number) {
  let num = Math.abs(number);
  return number * Math.pow(5, num.toString().length);
}
