
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

     /* Genesis Block */
    static genesis() {
        return new this(new Date(), 
            "",
            "GENESIS"
        );
    }

    /* Block Mining */
    static mineBlock(previousBlock, record, difficultyLevel) {
        const timestamp = new Date();
        const previousHash = previousBlock.hash;
        return new Block(timestamp, previousHash, record, difficultyLevel);
    }

    /* Generate Hash using SHA256 */
    static computeHash(message){
        return SHA256(message).toString();
    }

    /* Proof of Work */
    proofOfWork(difficultyLevel) {
        const message = this.timestamp + JSON.stringify(this.record) + this.previousHash;
        if(difficultyLevel){          
            const leadingZeros = "0".repeat(difficultyLevel);
            let nonce = 0;
            while(true){
                let hash =  Block.computeHash(message + nonce);
                if(hash.substring(0, difficultyLevel) == leadingZeros){             
                    return {
                        hash,
                        nonce
                    };
                }
                nonce++;
            }
        }else{
            return {
                hash: Block.computeHash(message),
                nonce: 0
            }
        }       
    }
}

module.exports = Block;
