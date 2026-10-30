import * as migration_20261030_033121_initial from './20261030_033121_initial';

export const migrations = [
  {
    up: migration_20261030_033121_initial.up,
    down: migration_20261030_033121_initial.down,
    name: '20261030_033121_initial'
  },
];
