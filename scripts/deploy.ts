import { ethers } from "hardhat"
import {parseEther} from 'ethers/lib/utils'
const color = require("cli-color")
const msg = color.xterm(39).bgXterm(128)

async function main() {

  console.log(" ")

  const EUR = await ethers.getContractFactory("Euro")
  const eur = await EUR.deploy()

  await eur.deployed()

  console.log(`ERC-20 deployed at ${msg(eur.address)} ✅`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
});
