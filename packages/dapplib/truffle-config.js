require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food ivory release magic horn gown light army gaze'; 
let testAccounts = [
"0x07582cc19003bca7542c7c7a2ed5befba9f6a0725991dc4d9c4cf9c992be7a17",
"0x2dd7450efa65de056dbd104e58048ec25b4a55f83dd9f5421c1b8d2efc7e67cb",
"0xb2ea0af1a9f005835177138973b38e806e440bca2b098e04140f34ae7e59cf62",
"0x334f0814f6ade97556f303da613f28c2110a34a499d36e9fd6ab373b50483fe9",
"0x3b3ad895f469e71d2c45f437e9b76eb79a699fabe4e68f2e4865895ca7e81a86",
"0x6bf366311b38e7d2a65140fbc2108b4055cbed026c977a5415b919b3e5556784",
"0x4b66066afafe81cba7118221fd2a55c5f1cbcd1f5ce9ea72ab17c41774371216",
"0x19db388f89b3499d345bcc4d563e71664b70ad86430623677f467e4c089fde15",
"0xbca3b3267e07fdbb3c472613e28999ae5f6a46e3ffeb24aa486d7868d935199a",
"0xf4da7cf0b056d02becc032602196eadb02b33f7de59e52cb036344b9912f81c1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

