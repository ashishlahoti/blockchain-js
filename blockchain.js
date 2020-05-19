const Block = require('./block');

class Blockchain {

    constructor() {
        this.difficultyLevel = 1;
        this.chain = [Block.genesis()];
    }

    addBlock(record) {
        const newBlock = Block.mineBlock(this.chain[this.chain.length-1], record, this.difficultyLevel);
        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;
