const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash= '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
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
blockchainSimple.addBlock(new Block(1, "06/02/2020", { amount: 4}));
blockchainSimple.addBlock(new Block(2, "07/02/2020", { amount: 10}));

console.log(JSON.stringify(blockchainSimple, null, 4));

// test blockchain broked & add data
blockchainSimple.chain[1].data = { amount: 100 };

// test blockchaing new calculateHash
blockchainSimple.chain[1].hash = blockchainSimple.chain[1].calculateHash();



console.log('\nIs blockchain valid? _> ' + blockchainSimple.isChainValid());

console.log(JSON.stringify(blockchainSimple, null, 4)); 