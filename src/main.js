const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9e16f1cb1fbd2aa5ca7a2b331efc8336aac73e9f0ac4e25bcbf2bb63a46c43ff');
const myWalletAddress = myKey.getPublic('hex');

let dedeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
dedeCoin.addTransaction(tx1);

console.log("\nStarting the miner...")
dedeCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of yusuf is", dedeCoin.getBalanceOfAdress(myWalletAddress));

console.log('Is chain valid?', dedeCoin.isChainValid());