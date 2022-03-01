const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
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
}

module.exports = {
  repeater
};
