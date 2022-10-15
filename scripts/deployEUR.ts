import { ethers } from "hardhat"
import {parseEther} from 'ethers/lib/utils'
const hre = require("hardhat");
const color = require("cli-color")
const msg = color.xterm(39).bgXterm(128)

async function main() {

  console.log(" ")

  const EUR = await ethers.getContractFactory("Euro")
  const eur = await EUR.deploy()

  await eur.deployed()

  console.log(`ERC-20 deployed at ${msg(eur.address)} ✅`)

  await eur.deployTransaction.wait(6)
  await hre.run("verify:verify", { network: "aurora_mainnet", address: eur.address, constructorArguments: [], });
  console.log("Etherscan verification done. ✅")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
});
