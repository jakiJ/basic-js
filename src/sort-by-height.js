const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = arr.filter(num => num !== -1).sort((num1, num2) => num1 - num2)
  let index = 0;
  const result = []
  arr.forEach(num => {
    if(num == -1) {
      result.push(-1)
    } else {
      result.push(sortArr[index])
      index++
    }
  })
  return result
}

module.exports = {
  sortByHeight
};
