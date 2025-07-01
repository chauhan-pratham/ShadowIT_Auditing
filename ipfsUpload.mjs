import { create } from 'ipfs-core';
import fs from 'fs/promises';

const ipfs = await create({
  repo: './ipfs-repo',
  start: true,
  config: {
    Addresses: {
      Swarm: [],
      API: '',
      Gateway: ''
    }
  }
});

const file = await fs.readFile("process_log.json");
const { cid } = await ipfs.add(file);
console.log("CID:", cid.toString());