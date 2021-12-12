import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  // {
  //   sousId: 0,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.cake,
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',lo
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,

  //   harvest: true,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 0,
    stakingToken: serializedTokens.annabell,
    earningToken: serializedTokens.annabell,
    contractAddress: {
      97: '0xb2D3eD4a9c33c90D3cdd91270645b9b52AC039D0',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 220,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.chess,
  //   contractAddress: {
  //     97: '',
  //     56: '0x4D1Ec426d0d7fb6bF344Dd372d0502EDD71c8d88',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.0861',
  // },
  // {
  //   sousId: 219,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.tlos,
  //   contractAddress: {
  //     97: '',
  //     56: '0xCB41a72067c227D6Ed7bc7CFAcd13eCe47Dfe5E9',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.3616',
  // },
  // {
  //   sousId: 218,
  //   stakingToken: serializedTokens.cake,
  //   earningToken: serializedTokens.stephero,
  //   contractAddress: {
  //     97: '',
  //     56: '0xcecba456fefe5b18d43df23419e7ab755b436655',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   sortOrder: 999,
  //   tokenPerBlock: '0.1851',
  // },
]

export default pools
