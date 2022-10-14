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

Aurora Mainnet:

```shell
npx hardhat run scripts/beat.ts --network aurora_mainnet
```

Aurora Testnet:

```shell
npx hardhat run scripts/beat.ts --network aurora_testnet
```

Goerli:

```shell
npx hardhat run scripts/beat.ts --network goerli
```

## Deploy an ERC-20

On Aurora testnet:

```shell
npx hardhat run scripts/deploy.ts --network aurora_testnet
```

On Aurora Mainnet:

```shell
npx hardhat run scripts/deploy.ts --network aurora_mainnet
```

## Notes

- An 'open bar' EUR was deployed on Aurora Mainnet: [https://aurorascan.dev/address/0xA77c0153Ac5B609028109C708c5A3AcfF1A6159c#code](https://aurorascan.dev/address/0xA77c0153Ac5B609028109C708c5A3AcfF1A6159c#code). It was also verified using [Hardhat Etherscan plugin](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan#hardhat-etherscan).

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discord.gg/pfkJpEb4xn), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
