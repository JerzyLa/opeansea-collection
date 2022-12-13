# Opeansea collection

This project demonstrates a basic NFT collection which works with Opeansea
Example NFT was deployed on https://goerli.etherscan.io/address/0xDC3645372b11e9AD3F28d53a8aF5779Fcb87cBA2

## Setup

Create `.env` file based on `.env.example`

## Build

```
npm install
npx hardhat compile
```

## Deploy

This command will deploy on default goerli testnet

```
npx hardhat deploy
```

## Verify contract on the etherscan

This command will make contract verified on the etherscan

```
npx hardhat verify <CONTRACT_ADDRESS>
```

## Mint tokens

The user can mint directly on the etherscan or with command

```
npx hardhat mint --address <TOKEN_OWNER_ADDRESS>
```

## Upload `./images` to IPFS

1. Pack images to `.car` file

```
npx ipfs-car --pack images --output images.car
```

2. Upload `.car` file to IPFS (can be done using https://nft.storage/)

## Upload `./metadata` to IPFS

1. Pack images to `.car` file

```
npx ipfs-car --pack metadata --output metadata.car
```

2. Upload `.car` file to IPFS (can be done using https://nft.storage/)

## Set base metadata url to the NFT

```
npx hardhat set-base-token-uri --base-url "https://<IPFS_HASH>.ipfs.dweb.link/metadata/"
```

## Get token metadata

```
npx hardhat token-uri --token-id <TOKEN_ID>
```
