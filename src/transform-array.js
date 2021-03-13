const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr)) {
    // --discard-next исключить слудующий элемент  массива
    // --discard-prev исключить предыдущий элемент массива
    // --double-next добавить следующий элемент
    // --double-prev добавить преыдущий элемент
    let transformArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i++;
        continue;
      }
      if(arr[i] === '--discard-prev' && transformArr.length > 0) {
        transformArr.pop(transformArr.length -1);
        continue;
      }
      if(arr[i] === '--double-next') {
        transformArr.push(arr[i+1]);
        continue;
      }
      if(arr[i] === '--double-prev') {
        transformArr.push(arr[i-1]);
      } else {
        transformArr.push(arr[i]);
        }

    }

    return transformArr;

  } else {
    return false;
  }

};


