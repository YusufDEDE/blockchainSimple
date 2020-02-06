const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash= '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();   
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "05/02/2020", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let blockchainSimple = new Blockchain();
blockchainSimple.addBlock(new Block(1, "06/02/2020", { amount: 4}));
blockchainSimple.addBlock(new Block(1, "07/02/2020", { amount: 10}));

console.log(JSON.stringify(blockchainSimple, null, 4));
