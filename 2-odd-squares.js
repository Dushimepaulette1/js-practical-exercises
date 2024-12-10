/*You are given an array of numbers. Your task is to implement a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.

Example:
oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]
*/
function oddSquares(array) {
  for (let i = 0; i < array.length; i++) {
    let evenNumbers = array.filter((num) => num % 2 !== 0);
    let squares = evenNumbers.map((number) => number ** 2);
    return squares;
  }
}
console.log(oddSquares([3, 8, 9, 1, 3]));
