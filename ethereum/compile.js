const path = require('path'); //for cross platform compatibility
const solc = require('solc');
const fs = require('fs-extra'); //for accessing local file system.

const buildPath = path.resolve(__dirname, '../src/ethereum/build');
fs.removeSync(buildPath); 
// Here checking if there is a pre-existing 'build' folder.  If so, delete it first.
//fs-extra module makes easy to remove an entire folder like above.

const contractsPath = path.resolve(__dirname, 'contracts', 'Contracts.sol');
const source = fs.readFileSync(contractsPath, 'utf8'); //specifies to usee utf8 encoding for the file.  We will read the solidity code from the file system as it is not javascript (node will not understand it.)

const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); //Now create a new 'build' folder.

for (let contract in output) { //take each key from output object.
  fs.outputJsonSync(  //output json object.
    path.resolve(buildPath, contract.replace(':', '') + '.json'), //specify the path and file name to output
    output[contract] //output json object under the name (key)
  );
}






