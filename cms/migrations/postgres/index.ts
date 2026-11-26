import * as migration_20261030_033121_initial from './20261030_033121_initial';
import * as migration_20261030_193825_themes_and_music from './20261030_193825_themes_and_music';

export const migrations = [
  {
    up: migration_20261030_033121_initial.up,
    down: migration_20261030_033121_initial.down,
    name: '20261030_033121_initial',
  },
  {
    up: migration_20261030_193825_themes_and_music.up,
    down: migration_20261030_193825_themes_and_music.down,
    name: '20261030_193825_themes_and_music'
  },
];
