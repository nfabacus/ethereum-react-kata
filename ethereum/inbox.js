import web3 from './web3';
import Inbox from './build/Inbox.json';

const instance = new web3.eth.Contract(
  JSON.parse(Inbox.interface),
  process.env.DEPLOYED_CONTRACT_ADDRESS
);

export default instance;