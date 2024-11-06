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
  console.log(arrayStats([1, 2, 3, 4, 5]));
}
