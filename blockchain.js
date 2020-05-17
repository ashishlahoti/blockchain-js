const Block = require('./block');

class Blockchain {

    constructor(difficultyLevel) {
        this.difficultyLevel = difficultyLevel;
        this.chain = [Block.genesis()];
    }

    addBlock(record) {
        const newBlock = Block.mineBlock(this.chain[this.chain.length-1], record, this.difficultyLevel);
        this.chain.push(newBlock);
    }

    setDifficultyLevel(difficultyLevel){
        this.difficultyLevel = difficultyLevel;
    }

    print() {
        console.log(this.chain);
    }
}

module.exports = Blockchain;