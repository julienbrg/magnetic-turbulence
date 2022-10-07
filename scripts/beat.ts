import { ethers } from "hardhat"
const color = require("cli-color")
const msg = color.xterm(39).bgXterm(128)

async function main() {

  // Listens to every block change
  ethers.provider.on("block", (blockNumber:any) => {

    console.log(`block change detected`)

    const getBlockTimeStamp = async () => {
      const bts = (await ethers.provider.getBlock(blockNumber)).timestamp
      return bts
    }

    getBlockTimeStamp().then(bts => {
      console.log(" ")
      console.log(`Block ${msg(blockNumber)} was mined at ${bts}`)
      console.log(" ")
    })
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
