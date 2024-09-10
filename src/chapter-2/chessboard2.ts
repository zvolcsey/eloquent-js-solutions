// n = size of the chessboard
// O(n) time | O(n) space
function createChessBoard(size: number) {
  // Create the two patterns of rows
  let evenRowArray: string[] = [];
  let oddRowArray: string[] = [];

  for (let col = 1; col <= size; col++) {
    evenRowArray.push((col % 2 === 0 ? " " : "#"));
    oddRowArray.push((col % 2 === 0 ? "#" : " "));
  }

  // Convert the pattern to string
  let evenRowString = evenRowArray.join("");
  let oddRowString = oddRowArray.join("");

  // Create a the chessboard with the two patterns
  let chessboardArray: string[] = [];

  for (let row = 1; row <= size; row++) {
    chessboardArray.push(row % 2 === 0 ? evenRowString : oddRowString);
  }

  return chessboardArray.join("\n");
}

console.log(createChessBoard(8));
console.log("\n");
console.log(createChessBoard(9));
console.log("\n");
console.log(createChessBoard(16));

// This line turns the file into a module
export {};