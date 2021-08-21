/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
  let low = 0;
  let height = numbers.length - 1;
  while (low < height) {
      let mid = low + Math.floor((height - low) / 2);
      if (numbers[mid] > numbers[height]) {
          low = mid + 1;
      } else if (numbers[mid] < numbers[height]) {
          height = mid;
      } else {
          height = height - 1;
      }
  }
  return numbers[low];
};