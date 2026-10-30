import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_theme_settings_default_theme" AS ENUM('blue', 'red', 'purple');
  CREATE TABLE "audio" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "theme_settings_blue_assets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"upload_id" integer
  );
  
  CREATE TABLE "theme_settings_purple_assets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"upload_id" integer
  );
  
  CREATE TABLE "theme_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"default_theme" "enum_theme_settings_default_theme" DEFAULT 'red' NOT NULL,
  	"controls_enabled" boolean DEFAULT true,
  	"music_enabled" boolean DEFAULT true,
  	"volume" numeric DEFAULT 0.35 NOT NULL,
  	"red_music_title" varchar DEFAULT 'Trilha de Guilty Gear do Figma' NOT NULL,
  	"red_music_source" varchar DEFAULT '/assets/music/guilty-gear.m4a' NOT NULL,
  	"red_music_source_upload_id" integer,
  	"blue_colors_background" varchar DEFAULT '#001647' NOT NULL,
  	"blue_colors_accent" varchar DEFAULT '#003cc0' NOT NULL,
  	"blue_colors_dark" varchar DEFAULT '#001647' NOT NULL,
  	"blue_colors_card" varchar DEFAULT '#002d8f' NOT NULL,
  	"blue_colors_table" varchar DEFAULT '#002370' NOT NULL,
  	"blue_colors_table_header" varchar DEFAULT '#0033a3' NOT NULL,
  	"blue_colors_text" varchar DEFAULT '#ffffff' NOT NULL,
  	"blue_colors_muted_text" varchar DEFAULT '#ededed' NOT NULL,
  	"blue_colors_home_background" varchar DEFAULT '#001647' NOT NULL,
  	"blue_colors_join" varchar DEFAULT '#004cf5' NOT NULL,
  	"blue_colors_hero_edge" varchar DEFAULT '#003cc0' NOT NULL,
  	"blue_music_title" varchar DEFAULT 'Abertura de Street Fighter do Figma' NOT NULL,
  	"blue_music_source" varchar DEFAULT '/assets/music/street-fighter.m4a' NOT NULL,
  	"blue_music_source_upload_id" integer,
  	"purple_colors_background" varchar DEFAULT '#310b2e' NOT NULL,
  	"purple_colors_accent" varchar DEFAULT '#9b3a90' NOT NULL,
  	"purple_colors_dark" varchar DEFAULT '#310b2e' NOT NULL,
  	"purple_colors_card" varchar DEFAULT '#64175e' NOT NULL,
  	"purple_colors_table" varchar DEFAULT '#4a1146' NOT NULL,
  	"purple_colors_table_header" varchar DEFAULT '#7b1d74' NOT NULL,
  	"purple_colors_text" varchar DEFAULT '#ffffff' NOT NULL,
  	"purple_colors_muted_text" varchar DEFAULT '#ededed' NOT NULL,
  	"purple_colors_home_background" varchar DEFAULT '#3b0e38' NOT NULL,
  	"purple_colors_join" varchar DEFAULT '#b95cae' NOT NULL,
  	"purple_colors_hero_edge" varchar DEFAULT '#9b3a90' NOT NULL,
  	"purple_music_title" varchar DEFAULT 'Trilha de Under Night In-Birth do Figma' NOT NULL,
  	"purple_music_source" varchar DEFAULT '/assets/music/under-night.m4a' NOT NULL,
  	"purple_music_source_upload_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "audio_id" integer;
  ALTER TABLE "theme_settings_blue_assets" ADD CONSTRAINT "theme_settings_blue_assets_upload_id_media_id_fk" FOREIGN KEY ("upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theme_settings_blue_assets" ADD CONSTRAINT "theme_settings_blue_assets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theme_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theme_settings_purple_assets" ADD CONSTRAINT "theme_settings_purple_assets_upload_id_media_id_fk" FOREIGN KEY ("upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theme_settings_purple_assets" ADD CONSTRAINT "theme_settings_purple_assets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."theme_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "theme_settings" ADD CONSTRAINT "theme_settings_red_music_source_upload_id_audio_id_fk" FOREIGN KEY ("red_music_source_upload_id") REFERENCES "public"."audio"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theme_settings" ADD CONSTRAINT "theme_settings_blue_music_source_upload_id_audio_id_fk" FOREIGN KEY ("blue_music_source_upload_id") REFERENCES "public"."audio"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "theme_settings" ADD CONSTRAINT "theme_settings_purple_music_source_upload_id_audio_id_fk" FOREIGN KEY ("purple_music_source_upload_id") REFERENCES "public"."audio"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "audio_updated_at_idx" ON "audio" USING btree ("updated_at");
  CREATE INDEX "audio_created_at_idx" ON "audio" USING btree ("created_at");
  CREATE UNIQUE INDEX "audio_filename_idx" ON "audio" USING btree ("filename");
  CREATE INDEX "theme_settings_blue_assets_order_idx" ON "theme_settings_blue_assets" USING btree ("_order");
  CREATE INDEX "theme_settings_blue_assets_parent_id_idx" ON "theme_settings_blue_assets" USING btree ("_parent_id");
  CREATE INDEX "theme_settings_blue_assets_upload_idx" ON "theme_settings_blue_assets" USING btree ("upload_id");
  CREATE INDEX "theme_settings_purple_assets_order_idx" ON "theme_settings_purple_assets" USING btree ("_order");
  CREATE INDEX "theme_settings_purple_assets_parent_id_idx" ON "theme_settings_purple_assets" USING btree ("_parent_id");
  CREATE INDEX "theme_settings_purple_assets_upload_idx" ON "theme_settings_purple_assets" USING btree ("upload_id");
  CREATE INDEX "theme_settings_red_music_red_music_source_upload_idx" ON "theme_settings" USING btree ("red_music_source_upload_id");
  CREATE INDEX "theme_settings_blue_music_blue_music_source_upload_idx" ON "theme_settings" USING btree ("blue_music_source_upload_id");
  CREATE INDEX "theme_settings_purple_music_purple_music_source_upload_idx" ON "theme_settings" USING btree ("purple_music_source_upload_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_audio_fk" FOREIGN KEY ("audio_id") REFERENCES "public"."audio"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_audio_id_idx" ON "payload_locked_documents_rels" USING btree ("audio_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "audio" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theme_settings_blue_assets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theme_settings_purple_assets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "theme_settings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "audio" CASCADE;
  DROP TABLE "theme_settings_blue_assets" CASCADE;
  DROP TABLE "theme_settings_purple_assets" CASCADE;
  DROP TABLE "theme_settings" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_audio_fk";
  
  DROP INDEX "payload_locked_documents_rels_audio_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "audio_id";
  DROP TYPE "public"."enum_theme_settings_default_theme";`)
}
