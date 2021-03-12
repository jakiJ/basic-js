const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') {
    return false;
  }

  let sampleActivityNum = +sampleActivity;

  if (isNaN(sampleActivityNum) !== true && sampleActivityNum > 0 && sampleActivityNum <= 15) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNum) / (0.693 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};
