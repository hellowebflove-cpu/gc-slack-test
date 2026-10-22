import * as migration_20261022_054556_initial from './20261022_054556_initial';

export const migrations = [
  {
    up: migration_20261022_054556_initial.up,
    down: migration_20261022_054556_initial.down,
    name: '20261022_054556_initial'
  },
];
