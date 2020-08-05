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
// Contract deployed to 0xeC538821F7Bf2981F1f870d4F80F4a01f3E8B646
