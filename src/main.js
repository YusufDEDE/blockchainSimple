const {Blockchain, Transaction} = require('./blockchain');

let blockchainSimple = new Blockchain();


/*
console.log("Mining block 1.....");
blockchainSimple.addBlock(new Block(1, "06/02/2020", { amount: 4}));
console.log("Mining block 2 .....");
blockchainSimple.addBlock(new Block(2, "07/02/2020", { amount: 10}));
console.log(JSON.stringify(blockchainSimple, null, 4));
// test blockchain broked & add data
blockchainSimple.chain[1].data = { amount: 100 };
// test blockchaing new calculateHash
blockchainSimple.chain[1].hash = blockchainSimple.chain[1].calculateHash();
console.log('\nIs blockchain valid? _> ' + blockchainSimple.isChainValid());
console.log(JSON.stringify(blockchainSimple, null, 4));  */

blockchainSimple.createTransaction(new Transaction('address1', 'address2', 100));
blockchainSimple.createTransaction(new Transaction('address2', 'address1', 50));

console.log("\nStarting the mine...");
blockchainSimple.minePendingTransactions('yusuf-address');

console.log("\nBalance of yusuf is", blockchainSimple.getBalanceOfAdress('yusuf-address'));

console.log("\nStarting the miner again..")
blockchainSimple.minePendingTransactions('yusuf-address');

console.log("\nBalance of yusuf is", blockchainSimple.getBalanceOfAdress('yusuf-address'));