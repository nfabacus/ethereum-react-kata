import Web3 from 'web3';
import { INFURAAPI } from '../config';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    INFURAAPI //pass url for infura api via 
  );
  web3 = new Web3(provider);
}

export default web3;



