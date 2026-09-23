import { CompiledContract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';
import {
  Contract,
  ledger,
} from './managed/petition/contract/index.js';

import path from 'node:path';

export { Contract, ledger };

export type {
  Ledger,
  Witnesses,
  Circuits,
  ImpureCircuits,
  ProvableCircuits,
  PureCircuits,
} from './managed/petition/contract/index.js';

const currentDir = path.resolve(new URL(import.meta.url).pathname, '..');

export const zkConfigPath = path.resolve(
  currentDir,
  'managed',
  'petition',
);

export const CompiledPetitionContract = CompiledContract.make(
  'PetitionContract',
  Contract,
).pipe(
  CompiledContract.withVacantWitnesses,
  CompiledContract.withCompiledFileAssets(zkConfigPath),
);
