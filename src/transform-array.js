const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
    // --discard-next  исключает следующий элемент  массива
    // --discard-prev исключает предшествующий элемент массива
    // --double-next дублирует следующий элемент
    // --double-prev дублирует предшествующий элемент
    let transformArr = arr.slice(0, arr.length);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        transformArr[i] = transformArr[i + 1] = '--'
        continue;
      }
      if(arr[i] === '--discard-prev' && transformArr.length > 0) {
        transformArr[i] = transformArr[i - 1] = '--'
        continue;
      }
      if(arr[i] === '--double-next') {
        transformArr[i] = transformArr[i + 1]
        continue;
      }
      if(arr[i] === '--double-prev') {
        transformArr[i] = transformArr[i - 1]
      }
    }

    return transformArr.filter(item => item != '--' && item != undefined);
}

module.exports = {
  transform
};
