const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
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
}

module.exports = {
  createDreamTeam
};
