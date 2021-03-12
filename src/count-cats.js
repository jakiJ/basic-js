const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {let sum = 0;
  matrix.forEach(item => {
    item.join(',').split(',').forEach(element => {
        if (element === "^^") {
          sum++;
        }
      })
  })
  return sum;
};

