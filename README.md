# Magnetic turbulence

Testing [Aurora](https://aurora.dev/).

## Install

```shell
npm i
```

## Test

```shell
npx hardhat test
```

## Run

Create a `.env` file with your own keys at the root on the model of [`.env.example`](https://github.com/julienbrg/magnetic-turbulence/blob/main/.env.example).

To benefit from Aurora free transactions, you can sign up to [Aurora+](https://aurora.plus/dashboard), and use the network URL shown in your dashboard (top right menu: `Aurora+ Network'` tab).

Aurora Mainnet:

```shell
npx hardhat run scripts/beat.ts --network aurora_mainnet
```

Aurora Testnet:

```shell
npx hardhat run scripts/beat.ts --network aurora_testnet

```

Goerli Testnet:

```shell
npx hardhat run scripts/beat.ts --network goerli
```

## Deploy an ERC-20

This will deploy the MST token contract and mint 10,000 units to your wallet.

On Aurora testnet:

```shell
npx hardhat run scripts/deploy.ts --network aurora_testnet
```

On Aurora Mainnet:

```shell
npx hardhat run scripts/deploy.ts --network aurora_mainnet
```

## Deploy EUR

On this ERC-20 contract, the `mint()` function is public.

```shell
npx hardhat run scripts/deployEUR.ts --network aurora_testnet
```

## Notes

- An 'open bar' EUR was deployed on Aurora Mainnet: [https://aurorascan.dev/address/0xA77c0153Ac5B609028109C708c5A3AcfF1A6159c#code](https://aurorascan.dev/address/0xA77c0153Ac5B609028109C708c5A3AcfF1A6159c#code). It was also verified using [Hardhat Etherscan plugin](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan#hardhat-etherscan).

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discord.gg/pfkJpEb4xn), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
