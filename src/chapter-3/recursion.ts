// n = input number
// O(n) time - It should reach the base case.
// O(n) space - call stack
function isEven(n: number): boolean | string {
  if (!Number.isInteger(n)) return "The input must be a whole number.";
  if (n < 0) return "The input must be a positive number.";
  if (n > 100) return "The input must be between 0 and 100.";
  if (n === 0) return true;
  if (n === 1) return false;

  return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(3.5));
console.log(isEven(101));
console.log(isEven(-1));