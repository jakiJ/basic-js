const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let result = '';

  if (repeatTimes > 1 || addition) {
    let inSep = repeatTimes - 1;
    for (let i = 0; i < repeatTimes; i++) {
      result +=  String(str);
      if (addition || typeof addition === "boolean" || addition === null) {
          let onSep = additionRepeatTimes - 1;
          for (let j = 0; j < additionRepeatTimes; j++) {
            result +=String(addition);
            if (onSep > 0) {
              result += additionSeparator;
              onSep--;
            }
          }
      }
      if (inSep > 0) {
        result += separator;
        inSep--;
      }
    }
    return result;
  }

  return String(str);

  };