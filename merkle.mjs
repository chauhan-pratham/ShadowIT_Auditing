import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import fs from 'fs';

const cids = fs.readFileSync("cid.txt", "utf-8").split("\n").filter(Boolean);
const leaves = cids.map(x => keccak256(x));
const tree = new MerkleTree(leaves, keccak256);
const root = tree.getRoot().toString("hex");

console.log("Merkle Root:", root);
fs.writeFileSync("merkle_root.txt", root);