import web3 from './web3';
import Inbox from './build/Inbox.json';
import { DEPLOYED_CONTRACT_ADDRESS } from '../config';

const instance = new web3.eth.Contract(
  JSON.parse(Inbox.interface),
  DEPLOYED_CONTRACT_ADDRESS
);

export default instance;