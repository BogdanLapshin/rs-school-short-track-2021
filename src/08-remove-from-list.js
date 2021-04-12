/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let hd = l;
  let lt = l;
  let prvs = null;
  while (lt) {
    if (lt.value === k) {
      if (prvs === null) {
        lt = lt.next;
        hd = lt;
      } else {
        prvs.next = lt.next;
        lt = lt.next;
      }
    }
    prvs = lt;
    lt = lt.next;
  }
  return hd;
}

module.exports = removeKFromList;
