const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]' || Object.entries(date).length) {
    throw new Error("Invalid date!")
  }
    let numberMonth = date.getMonth()
    if (numberMonth == 0 || numberMonth == 1 || numberMonth == 11) return 'winter';
    if (numberMonth >= 2 && numberMonth <= 4) return 'spring';
    if (numberMonth >= 5 && numberMonth <= 7) return 'summer';
    if (numberMonth >= 8 && numberMonth <= 10) return 'fall';
}

module.exports = {
  getSeason
};
