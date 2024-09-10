// O(1) time | O(1) space
function min(num1: number, num2: number) {
  // Sanity check
  if (typeof num1 !== 'number' && typeof num2 !== 'number')
    return "The 'num1' and 'num2' must be strings."
  return num1 < num2 ? num1 : num2;
}

console.log(min(0, 10));
console.log(min(-10, 0));
console.log(min(10, 10));