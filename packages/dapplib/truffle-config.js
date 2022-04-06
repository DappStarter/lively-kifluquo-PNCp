require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name remember pitch snow install merry forward gentle'; 
let testAccounts = [
"0xe69ea8c50511d0b2c576e0418cf83aa78dd895712b6d4fd777d159d2b7b4c800",
"0x5b3b2c97e6f8fd326dbbac908dfdb4887dfc4b8873409f6b7b220d5e6ff5156e",
"0x278d8e052d71304ce0679b90844d694b735a18524667942a1f5283016de0a448",
"0x6abbe97164661c3d35ff7ff5e91d57f67ad6613ccc54ba0ffe7b88c80d10a100",
"0xbfe6298433bddacfcbabe38455d8eda8630eddd4d19aaec4b3672a9c951fdd1a",
"0x3beeb5daa387363a7e565261703466fb0c5c9d95539c1c438741d7be96547b6d",
"0xb8f58f5576c76250b0c0e59bc7088e6f2c787b3f7ab460edbfc39f3eb6a7ce06",
"0x8b9a199e0e46951efff854ae7c1c38a6d3a7bffff6942e6c4174400ff6dd7c21",
"0x6fbf4dfca766ee612f5d7dc871dab34ccce461df96d74ebac7b6dd01fc9c4f72",
"0x6b40f9fb4b289f1ab15614decbc6ff7464795cd6a27fe354cc1d7fe1b6a8842d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


