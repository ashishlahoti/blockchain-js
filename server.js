const Blockchain = require('./blockchain')
const Block = require('./block');
const { performance } = require('perf_hooks');

const blockchain = new Blockchain(1);

const userList = ["Alice", "Bob", "Charlie", "David", "Eric", "Franklin", "Gavin", "Harry", "Iris", 
                "Joey", "Kate", "Leo", "Monica", "Nancy", "Oscar", "Phoebe", "Quinn", "Ross", 
                "Sofia", "Tyler", "Umar", "Victor", "Wilson", "Xena", "Yasmine", "Zara"];

const t0 = performance.now();
for(let i = 0; i < 5; i++) {
    blockchain.addBlock({
        sender: userList[Math.floor(Math.random() * userList.length)],
        receiver: userList[Math.floor(Math.random() * userList.length)],
        amount: Math.floor(Math.random() * 1000)
    });
}
var t1 = performance.now()
console.log("Added first 5 blocks in  " + (t1 - t0) + " milliseconds.")

blockchain.setDifficultyLevel(4);
for(let i = 0; i < 5; i++) {
    blockchain.addBlock({
        sender: userList[Math.floor(Math.random() * userList.length)],
        receiver: userList[Math.floor(Math.random() * userList.length)],
        amount: Math.floor(Math.random() * 1000)
    });
}
var t2 = performance.now()
console.log("Added next 5 blocks in  " + (t2 - t1) + " milliseconds.")

blockchain.print();