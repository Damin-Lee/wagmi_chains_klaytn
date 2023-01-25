# `@wagmi/chains`

References to popular EVM-compatible chains.

## Installation

Install the `@wagmi/chains` package.

```
npm install https://github.com/Damin-Lee/wagmi_chains_klaytn
```

## Usage

Use your preferred chains!

```tsx
import { configureChains } from 'wagmi'
import { avalanche, bsc, mainnet } from '@wagmi/chains'

const { chains, provider } = configureChains(
  [mainnet, avalanche, bsc, klaytn],
  ...
)
```

> If your bundler supports tree-shaking (most likely), only the used chains will be included in the bundle, so you don't have to worry about bundle size. 😊

## Chains

- `arbitrum`
- `arbitrumGoerli`
- `avalanche`
- `avalancheFuji`
- `bsc`
- `bscTestnet`
- `canto`
- `fantom`
- `fantomTestnet`
- `foundry`
- `goerli`
- `hardhat`
- `iotex`
- `iotexTestnet`
- `localhost`
- `mainnet`
- `metis`
- `metisGoerli`
- `optimism`
- `optimismGoerli`
- `polygon`
- `polygonMumbai`
- `sepolia`
- `taraxa`
- `taraxaTestnet`
- `zkSync`
- `zkSyncTestnet`
- `klaytn`
- `klaytnBaobab`

## Contributing

Want to add another chain to the list? Make sure you read the [contributing guide](../../.github/CONTRIBUTING.md) first.
