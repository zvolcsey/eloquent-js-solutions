// n = length of the string 
// O(n) time | O(1) space
function countBs(string: string) {
  // Sanity checks
  if (typeof string !== 'string') return "The input must be a string."
  const stringLength = string.length;
  if (string.length >= 10) return "The input string must be shorter or equal than 10."
  
  let count = 0;

  // Check whether the next letter is 'B'
  for (let i = 0; i < stringLength; i++) {
    if (string[i] === 'B') {
      count++;
    }
  }

  return count;
}

console.log(countBs("BOB"));
console.log(countBs("This is a long string."))

// n = length of the string 
// O(n) time | O(1) space
function countChr(string: string, letter: string) {
  const stringLength = string.length;

  // Sanity checks
  if (typeof string !== 'string') return "The input must be a string.";
  if (string.length >= 10) 
    return "The input string must be shorter or equal than 10.";
  if (typeof letter !== 'string') return "The 'letter' value must be a string.";
  if (letter.length > 1) return "The 'letter' value must be one character.";

  let count = 0;

  // Check whether the next letter is equal with the input letter
  for (let i = 0; i < stringLength; i++) {
    if (string[i] === letter) {
      count++;
    }
  }

  return count;
}

console.log(countChr('kakkerlak', 'k'));
console.log(countChr('This is a long string.', 'k'));
console.log(countChr('kakkerlak', 'abc'));