const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || !Number.isInteger(position) || (1 < position > this.getLength())) {
      this.chain =[];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain =  this.chain.join('~~');
    this.chain = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
