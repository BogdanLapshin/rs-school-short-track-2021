/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digit = (String(n)).split('');
  let max = 0;
  digit.forEach((elem, index) => {
    if (parseInt(digit.slice(0, index).concat(digit.slice(index + 1)).join(''), 10) > max) {
      max = parseInt(digit.slice(0, index).concat(digit.slice(index + 1)).join(''), 10);
    }
  });
  return max;
}

module.exports = deleteDigit;
