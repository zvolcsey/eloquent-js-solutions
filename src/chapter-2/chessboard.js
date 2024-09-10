// O(n^2) time | O(n^2) space
const size = 8;
let chessboardString = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) { 
        chessboardString += " ";
      } else {
        chessboardString += "#";
      }
    } else {
      if (j % 2 === 0) {
        chessboardString += "#";
      } else {
        chessboardString += " ";
      }
    }
  }
  chessboardString += "\n"
}

console.log(chessboardString);