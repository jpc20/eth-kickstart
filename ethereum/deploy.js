const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/Campaignfactory.json");

const provider = new HDWalletProvider(
  "sister race cabin monitor slender orchard fork budget brass polar best ripple",
  "https://rinkeby.infura.io/v3/1385039fb2fb405a9272dec867afb43b"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
// Contract deployed to 0xdFb1d8210f7f074b2a2D8A90e933e13e45C77F16
