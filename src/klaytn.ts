import { Chain } from './types'

export const klaytn: Chain = {
	id: 8217,
	name: 'Klaytn',
	network: 'klaytn',
	nativeCurrency: {
		decimals: 18,
		name: 'Klaytn',
		symbol: 'KLAY',
	},
	rpcUrls: {
		default: { http: ['https://public-node-api.klaytnapi.com/v1/cypress'] },
		public: { http: ['https://public-node-api.klaytnapi.com/v1/cypress'] },
	},
	blockExplorers: {
		default: { name: 'klaytnscope', url: 'https://scope.klaytn.com/' },
	},
}