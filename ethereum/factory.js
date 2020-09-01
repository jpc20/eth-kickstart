import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xdFb1d8210f7f074b2a2D8A90e933e13e45C77F16"
);

export default instance;
