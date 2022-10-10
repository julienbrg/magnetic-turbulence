// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @custom:security-contact julien@strat.cc
contract Euro is ERC20 {
    constructor() ERC20("Euro", "EUR") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}