/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startValue = 0;
  let endValue = array.length - 1;
  let middleValue;
  while (startValue <= endValue) {
    middleValue = Math.ceil((endValue - startValue) / 2) + startValue;
    if (array[middleValue] === value) {
      return middleValue;
    }
    if (array[middleValue] < value) {
      startValue = middleValue + 1;
    } else {
      endValue = middleValue - 1;
    }
  }
  return null;
}

module.exports = findIndex;
