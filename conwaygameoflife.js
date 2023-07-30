/* eslint-disable prefer-const */

let row = 3;
let columns = 3;

let matriz = [];
// Let sgteMatriz = [];

export function initializeMatriz() {
  for (let i = 0; i < row; i++) {
    matriz[i] = new Array(columns);
  }

  return matriz;
}

export function fullingMatriz(row, columns) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < columns; j++) {
      matriz[i][j] = Math.floor(Math.random() * 2);
    }
  }

  return matriz;
}

console.log(initializeMatriz());
console.log(fullingMatriz());
