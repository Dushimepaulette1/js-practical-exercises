/*You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }
*/

function arrayStats(arrayNumbers) {
  let sum = 0;
  let min = arrayNumbers[0];
  let max = arrayNumbers[0];
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum = sum + arrayNumbers[i];
    if (arrayNumbers[i] < min) {
      min = arrayNumbers[i];
    }
    if (arrayNumbers[i] > max) {
      max = arrayNumbers[i];
    }
  }
  let average = sum / arrayNumbers.length;
  return {
    sum: sum,
    average: parseFloat(average.toFixed(2)),
    min: min,
    max: max,
  };
}
console.log(arrayStats([1, 2, 3, 4, 5]));
