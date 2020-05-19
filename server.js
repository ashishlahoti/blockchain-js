const Blockchain = require('./blockchain')
const { performance } = require('perf_hooks');

const blockchain = new Blockchain();

const userList = ["Alice", "Bob", "Charlie", "David", "Eric", "Franklin", "Gavin", "Harry", "Iris", 
                "Joey", "Kate", "Leo", "Monica", "Nancy", "Oscar", "Phoebe", "Quinn", "Ross", 
                "Sofia", "Tyler", "Umar", "Victor", "Wilson", "Xena", "Yasmine", "Zara"];

const addNBlocks = (n) => {
    for(let i = 0; i < n; i++) {
        blockchain.addBlock({
            sender: userList[Math.floor(Math.random() * userList.length)],
            receiver: userList[Math.floor(Math.random() * userList.length)],
            amount: Math.floor(Math.random() * 1000)
        });
    }
}

const t0 = performance.now();
addNBlocks(2);
var t1 = performance.now()
console.log("[Difficulty Level 1] Added first 2 blocks in  " + (t1 - t0) + " milliseconds.")

blockchain.difficultyLevel = 3;
addNBlocks(2);
var t2 = performance.now()
console.log("[Difficulty Level 3] Added next 2 blocks in  " + (t2 - t1) + " milliseconds.")

blockchain.difficultyLevel = 5;
addNBlocks(2);
var t3 = performance.now()
console.log("[Difficulty Level 5] Added next 2 blocks in  " + (t3 - t2) + " milliseconds.")

/* Print Blockchain*/
console.log(blockchain.chain);
