require('dotenv').config();
const { ethers } = require("ethers");
const fs = require("fs");

const root = fs.readFileSync("merkle_root.txt", "utf-8").trim();
const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const abi = require("./AuditRootStorageABI.json");
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);

async function storeRoot() {
  const tx = await contract.storeRoot("ABC_Corp", "2025-W25", "0x" + root);
  console.log("TX Hash:", tx.hash);
}
storeRoot();