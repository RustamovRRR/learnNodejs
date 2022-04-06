exports.finbonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  else return exports.finbonacci(n - 1) + exports.finbonacci(n - 2);
};
