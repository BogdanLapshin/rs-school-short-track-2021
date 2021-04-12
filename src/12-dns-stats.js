/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newObject = {};
  domains.forEach((domain) => {
    const array = domain.split('.');
    array.forEach((element, index) => {
      const entity = `.${array.slice(index).reverse().join('.')}`;
      if (!newObject[entity]) {
        newObject[entity] = 1;
      } else {
        newObject[entity]++;
      }
    });
  });
  return newObject;
}

module.exports = getDNSStats;
