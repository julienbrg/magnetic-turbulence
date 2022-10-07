// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyStupidToken is ERC20 {
    constructor(uint _supply) ERC20("My Stupid Token", "MST") {
        _mint(msg.sender, _supply);
    }
}