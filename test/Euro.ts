import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import {parseEther} from 'ethers/lib/utils';

describe("Euro", function () {

  async function deployContractsFixture() {
    const [alice, bob] = await ethers.getSigners();
    const EUR = await ethers.getContractFactory("Euro");
    const eur = await EUR.deploy();
    await eur.deployed();
    return { eur, alice, bob };
  }

  describe("Interactions", function () {
    it("Should transfer 1 EUR from Alice to Bob", async function () {
      const { eur, alice, bob } = await loadFixture(deployContractsFixture);
      await eur.connect(alice as any).mint(alice.address, parseEther('10000'));
      await eur.connect(alice as any).transfer(bob.address, parseEther('1'));
      expect(await eur.balanceOf(bob.address)).to.equal(parseEther('1'));
    });
  });
});