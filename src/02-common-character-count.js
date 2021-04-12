/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = 'aabcc' and s2 = 'adcaa', the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 'c'.
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const news1 = s1.split('');
  const news2 = s2.split('');
  news1.forEach((elem) => {
    for (let i = 0; i < news2.length; i++) {
      if (elem === news2[i]) {
        count++;
        news2.splice(i, 1);
        break;
      }
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
