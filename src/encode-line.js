const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
  const arr = str.split('');
  let sum = 1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i+1] == arr[i]) sum++;
    else {
      if(sum == 1) res.push(arr[i]);
      else {
        res.push(sum, arr[i]);
        sum = 1
      }
    }
  }
  return res.join('')
}

module.exports = {
  encodeLine
};
