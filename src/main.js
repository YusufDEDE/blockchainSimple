const SHA256 = require('crypto-js/sha256');

class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

class Block {
    constructor(timestamp, transactions, previousHash= '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();   
    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty +1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2; // mining difficulty 
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block("05/02/2020", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length -1];
    }

    minePendingTransactions(miningRewardAddress) {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log("Block successfully mined!");
        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];

    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAdress(address) {
        let balance = 0;

        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress === address) {
                    balance -= trans.amount;
                }
                
                if(trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }

    /*addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        //newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }*/

    isChainValid() {
        for(let i=1; i<this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                console.log("cracked chain node _> ", currentBlock.index);
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash) {
                console.log("cracked chain node _> ", currentBlock.index);
                return false;
            }
        }
        return true;
    }

}

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