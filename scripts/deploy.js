const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main () {
  //URL from where we can extract the metadata for a LW3Punk
  const metadataURL = "ipfs://QmZnXNeiFj5bRwM9Z9Zd3chJbkDtb9fazU2ZMW73zGkayp/";
  /* A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract. */
  const lw3PunksContract = await ethers.getContractFactory("LW3Punks");
  //deploy the contract
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);
  await deployedLW3PunksContract.deployed();
  //print the address of the deployed contract
  console.log("LW3Punks Contract Address: ", deployedLW3PunksContract.address);
}

//call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });