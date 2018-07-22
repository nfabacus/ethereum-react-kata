# Ethereum React Kata

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

1. Create React App
  - Use Create-react-app to build an app
2. install libraries
```
npm install --save ganache-cli mocha solc fs-extra web3@1.0.0-beta.34 dotenv truffle-hdwallet-provider
```
3. Make a contract using remix
    http://remix.ethereum.org/#optimize=false&version=soljson-v0.4.24+commit.e67f0147.js

4. Add your contract file in the project.
  - Create a 'ethereum' folder.
    - Create 'contracts' folder:
      - add contract file (e.g. Campaign.sol) in the 'contracts' folder.

5. Add tests for the contract
  - Maybe add tests within the 'contracts' folder for co-location?

6. Create compile.js in 'ethereum' folder.
  - Make sure to add your environmental variables in .env file.
  ** You will need to sign up for infura and install Metamask Chrome extension to your chrome browser (Please only use chrome browser.)
  - ```node compile.js``` to compile

7. Create deploy.js in 'ethereum' folder.
   ```node deploy.js``` to deploy.
    ** Make sure to copy the deployed address which is logged out to the terminal.
    ** 
8. Create web3.js file - instance of web3

9. Create an instance of your contract (e.g. inbox)
    e.g. Create inbox.js (for example)
    Make sure to add interfance and deployed address to create the contract instance.






 - deploy.js
    Make sure to change the below line (based on your contract name in Contracts.sol):
    ```
    const compiledContract= require('./build/Inbox.json');
    ```


7. Deploying to Rinkeby Network for test<br>
  Flow of communication this time:<br>
  API - web3 instance with Rinkeby network provider - connects via Infura's API to Infura's Node in Rinkeby Network.
  - Signup at Infura.io
  - install truffle-hdwallet-provider (Provider)
  ```
  npm install --save truffle-hdwallet-provider@0.0.3
  ```
  - Create a file called deploy.js in ethereum folder:
  - Wire up web3 with provider to a Rinkeby network (make sure to console.log the account created, so we can see)
  - To deploy, ```node deploy.js```
  - Check the address of the contract and go to https://rinkeby.etherscan.io. You can see if the contract is deployed by searching for the address.
  - To interact with the contract in the test network:
    Go to http://remix.ethereum.org:
    Click run tab.
    copy and paste the contract in Remix (if it is not there already), 
    select 'Injected Web3' under Environment.
    check the Account is yours in your Metamask.
    Paste in the newly deployed contract address into 'at Address' (instead of 'Create'), then click.
    It will display the deployed instance of the contract.
    Now you can interact with the contract.


