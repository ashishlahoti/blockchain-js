
const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, previousHash, record, difficultyLevel) {
        this.timestamp = timestamp;
        this.record = record;
        this.previousHash = previousHash;
        const proofOfWork = this.proofOfWork(difficultyLevel);
        this.hash = proofOfWork.hash;
        this.nonce = proofOfWork.nonce;
    }

    static genesis() {
        return new this(new Date(), 
            "",
            "GENESIS"
        );
    }

    static mineBlock(previousBlock, record, difficultyLevel) {
        const timestamp = new Date();
        const previousHash = previousBlock.hash;
        return new Block(timestamp, previousHash, record, difficultyLevel);
    }

    static computeHash(message){
        return { hash: SHA256(message).toString(), nonce: 0 };
    }

    proofOfWork(difficultyLevel) {
        const message = this.timestamp + JSON.stringify(this.record) + this.previousHash;
        if(difficultyLevel){          
            const leadingZeros = "0".repeat(difficultyLevel);
            let nonce = 0;
            while(true){
                let hash =  Block.computeHash(message + nonce).hash;
                if(hash.substring(0, difficultyLevel) == leadingZeros){             
                    return {
                        hash,
                        nonce
                    };
                }
                nonce++;
            }
        }else{
            return Block.computeHash(message);
        }       
    }
}

module.exports = Block;