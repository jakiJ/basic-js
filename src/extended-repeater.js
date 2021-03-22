const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/*str, options*/) {
  let n = [];
  let s = options.separator, add = options.addition, aRt = options.additionRepeatTimes > 1 ? options.additionRepeatTimes : 1, addS = options.additionSeparator;
  let mCount = options.repeatTimes >= 1 ? options.repeatTimes : 1;
  for (let i = 0; i < mCount; i++) {
    if (add) {
      let arr = [];

      for (let i = 0; i < aRt; i++) {

        arr.push(str)

      }
    }

  }
  return s, add, aRt, addS;
};