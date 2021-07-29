import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xE42Ac3a3b29262D9D449CcE6826245E1523D943e"
);

export default instance;
