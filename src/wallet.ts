import {
  createDefaultTestLogger,
  MidnightWalletProvider,
} from '@midnight-ntwrk/testkit-js';

import { PREPROD_CONFIG } from './config.js';

const logger = createDefaultTestLogger();

let walletProvider: MidnightWalletProvider | null = null;

export async function createWallet(): Promise<MidnightWalletProvider> {
  if (walletProvider) {
    return walletProvider;
  }

  const seed = process.env.MIDNIGHT_PREPROD_SEED;

  if (!seed) {
    throw new Error(
      'MIDNIGHT_PREPROD_SEED is not set. Provide the wallet seed through the environment before starting the wallet.',
    );
  }

  walletProvider = await MidnightWalletProvider.build(
    logger,
    PREPROD_CONFIG,
    seed,
  );

  return walletProvider;
}

export async function startWallet(): Promise<MidnightWalletProvider> {
  const wallet = await createWallet();

  await wallet.start(false);

  return wallet;
}

export async function stopWallet(): Promise<void> {
  if (!walletProvider) {
    return;
  }

  await walletProvider.stop();
  walletProvider = null;
}

export function getWalletAddress(
  wallet: MidnightWalletProvider,
): string {
  return wallet.getCoinPublicKey().toString();
}
