import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { NetworkId } from '@midnight-ntwrk/wallet-sdk';
import type { EnvironmentConfiguration } from '@midnight-ntwrk/testkit-js';

export const NETWORK_ID = 'preprod';

setNetworkId(NETWORK_ID);

export const PREPROD_CONFIG: EnvironmentConfiguration = {
  walletNetworkId: NetworkId.NetworkId.PreProd,
  networkId: 'preprod',
  indexer: 'https://indexer.preprod.midnight.network/api/v4/graphql',
  indexerWS: 'wss://indexer.preprod.midnight.network/api/v4/graphql/ws',
  node: 'https://rpc.preprod.midnight.network',
  nodeWS: 'wss://rpc.preprod.midnight.network',
  proofServer: 'http://127.0.0.1:6300',
  faucet: 'https://faucet.preprod.midnight.network/api/drips',
};

export const CONTRACT_ADDRESS: string | null = null;
