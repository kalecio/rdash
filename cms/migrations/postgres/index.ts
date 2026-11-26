import * as migration_20261030_033121_initial from './20261030_033121_initial';
import * as migration_20261030_193825_themes_and_music from './20261030_193825_themes_and_music';
import * as migration_20261126_182420_draft_preview_revisions from './20261126_182420_draft_preview_revisions';

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
  {
    up: migration_20261126_182420_draft_preview_revisions.up,
    down: migration_20261126_182420_draft_preview_revisions.down,
    name: '20261126_182420_draft_preview_revisions'
  },
];
