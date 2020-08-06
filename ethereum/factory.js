import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xeC538821F7Bf2981F1f870d4F80F4a01f3E8B646"
);

export default instance;
