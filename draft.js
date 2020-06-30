const transpose = function(matrix) {
  let length = matrix.length;

  let tempMatrix = [];
  if (length === 1) {
    for (let element of matrix[0]) {
      let temptempMatrix = [];
      temptempMatrix.push(element);
      tempMatrix.push(temptempMatrix);
    }
  }

  for (let i = 0; i < length; i++) {
    tempMatrix[i] = [];
    for (let j = 0; j < length; j ++) {
      tempMatrix[i][j] = matrix[j][i];
    }
  }
  return tempMatrix;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));

// transposition, which means flipping across a diagonal.
// In other words, when we transpose a matrix (or 2D array),
// each element has its row become its column, and its column become its row.

// Starter Code

// const transpose = function(matrix) {
//   // Put your solution here
// };

// // Do not edit this function.
// const printMatrix = (matrix) => {
//     for (const row of matrix) {
//         for (const el of row) {
//             process.stdout.write(el + " ");
//         }
//         process.stdout.write('\n')
//     }
// }

// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));

// Expected Logs
// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4
// ----
// 1 3 5 
// 2 4 6
// ----
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7