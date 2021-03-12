const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
      let secretName = members.reduce((acc, item) => {
        let firstLetter;
        if (typeof item === 'string') {
          let firstLetter = item.split('').find( element => element !== ' ');
          acc.push(firstLetter.toUpperCase());
        }
        return acc;
      }, []);

      return secretName.sort().join('');

  } else {
    return false;
  }

};
