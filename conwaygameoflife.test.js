/* eslint-disable no-undef */
import { test } from "node:test";
import { initializeMatriz } from "./conwaygameoflife";
test('Then a matrix should appar with "[ [ <3 empty items> ], [ <3 empty items> ], [ <3 empty items> ] ]"', () => {
  const row = 3;
  const columns = 3;
  const expected = [
    [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ],
  ];
  const result = initializeMatriz(row, columns);
  expect(result).toEqual(expected);
});
