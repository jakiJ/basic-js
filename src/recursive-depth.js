const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deepOut = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let deepIn = 1;
        deepIn = deepIn + this.calculateDepth(arr[i])
        deepOut = deepIn > deepOut ? deepIn : deepOut;
      }
    }
    return deepOut;
    }
};
