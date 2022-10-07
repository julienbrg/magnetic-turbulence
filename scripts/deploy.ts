import { ethers } from "hardhat"
import {parseEther} from 'ethers/lib/utils'
const color = require("cli-color")
const msg = color.xterm(39).bgXterm(128)

async function main() {

  console.log(" ")

  const MST = await ethers.getContractFactory("MyStupidToken")
  const mst = await MST.deploy(parseEther('10000'))

  await mst.deployed()

  console.log(`ERC-20 deployed at ${msg(mst.address)} (Aurora Testnet) ✅`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
});
