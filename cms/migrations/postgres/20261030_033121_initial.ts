import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_events_status" AS ENUM('upcoming', 'past');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
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
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"image" varchar NOT NULL,
  	"image_upload_id" integer,
  	"mobile_image" varchar NOT NULL,
  	"mobile_image_upload_id" integer,
  	"detail_image" varchar NOT NULL,
  	"detail_image_upload_id" integer,
  	"status" "enum_events_status" DEFAULT 'upcoming' NOT NULL,
  	"date" varchar,
  	"location" varchar,
  	"price" varchar,
  	"href" varchar NOT NULL,
  	"order" numeric,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "albums_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image" varchar NOT NULL,
  	"image_upload_id" integer,
  	"mobile_image" varchar NOT NULL,
  	"mobile_image_upload_id" integer,
  	"alt" varchar NOT NULL
  );
  
  CREATE TABLE "albums" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"image" varchar NOT NULL,
  	"image_upload_id" integer,
  	"mobile_image" varchar NOT NULL,
  	"mobile_image_upload_id" integer,
  	"order" numeric,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"copy" varchar NOT NULL,
  	"image" varchar NOT NULL,
  	"image_upload_id" integer,
  	"href" varchar NOT NULL,
  	"order" numeric,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "games" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"image" varchar NOT NULL,
  	"image_upload_id" integer,
  	"href" varchar NOT NULL,
  	"order" numeric,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "players" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"score" numeric,
  	"image" varchar NOT NULL,
  	"image_upload_id" integer,
  	"published" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"events_id" integer,
  	"albums_id" integer,
  	"news_id" integer,
  	"games_id" integer,
  	"players_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "installation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"imported_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"image" varchar NOT NULL,
  	"image_upload_id" integer,
  	"active_image" varchar NOT NULL,
  	"active_image_upload_id" integer,
  	"image_label" varchar NOT NULL,
  	"image_width" numeric
  );
  
  CREATE TABLE "site_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "site_footer_social" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "site" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar DEFAULT 'R-DASH' NOT NULL,
  	"title" varchar DEFAULT 'Comunidade de jogos de luta em Recife' NOT NULL,
  	"title_suffix" varchar DEFAULT 'R-DASH Recife' NOT NULL,
  	"description" varchar DEFAULT 'Encontre a comunidade R-DASH em Recife: jogos de luta, Anime Fighters, torneios, encontros e novidades para jogadores.' NOT NULL,
  	"language" varchar DEFAULT 'pt-BR' NOT NULL,
  	"footer_title" varchar DEFAULT 'Sobre nós' NOT NULL,
  	"footer_mobile_title" varchar DEFAULT 'Sobre' NOT NULL,
  	"footer_sitemap_title" varchar DEFAULT 'Sitemap' NOT NULL,
  	"footer_social_title" varchar DEFAULT 'Social' NOT NULL,
  	"footer_about" varchar DEFAULT 'A R-DASH é uma comunidade dedicada ao universo de Anime Fighters em Recife, Pernambuco — conectando jogadores, fortalecendo a cena local e criando experiências para quem vive a cultura competitiva dentro e fora do game.' NOT NULL,
  	"theme_background" varchar DEFAULT '#881411' NOT NULL,
  	"theme_accent" varchar DEFAULT '#e53935' NOT NULL,
  	"theme_dark" varchar DEFAULT '#5f0808' NOT NULL,
  	"theme_card" varchar DEFAULT '#c21d19' NOT NULL,
  	"theme_table" varchar DEFAULT '#8f0c0c' NOT NULL,
  	"theme_table_header" varchar DEFAULT '#e51313' NOT NULL,
  	"theme_text" varchar DEFAULT '#ffffff' NOT NULL,
  	"theme_muted_text" varchar DEFAULT '#ededed' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Comunidade de jogos de luta em Recife' NOT NULL,
  	"seo_description" varchar DEFAULT 'Encontre a comunidade R-DASH em Recife: jogos de luta, Anime Fighters, torneios, encontros e novidades para jogadores.' NOT NULL,
  	"hero_enabled" boolean DEFAULT true,
  	"event_enabled" boolean DEFAULT true,
  	"news_enabled" boolean DEFAULT true,
  	"games_enabled" boolean DEFAULT true,
  	"tv_enabled" boolean DEFAULT true,
  	"mascot_enabled" boolean DEFAULT true,
  	"news_title" varchar DEFAULT 'Novidades' NOT NULL,
  	"games_title" varchar DEFAULT 'Nossos jogos' NOT NULL,
  	"layout_height" numeric DEFAULT 5146,
  	"layout_mobile_height" numeric DEFAULT 1947,
  	"layout_footer_top" numeric DEFAULT 4653,
  	"layout_mobile_footer_top" numeric DEFAULT 1452,
  	"layout_event_top" numeric DEFAULT 716,
  	"layout_mobile_event_top" numeric DEFAULT 218.9,
  	"layout_news_top" numeric DEFAULT 1608,
  	"layout_mobile_news_top" numeric DEFAULT 581.91,
  	"layout_tv_top" numeric DEFAULT 2572,
  	"layout_mobile_tv_top" numeric DEFAULT 854.03,
  	"layout_games_top" numeric DEFAULT 3544,
  	"layout_mobile_games_top" numeric DEFAULT 1128.41,
  	"layout_mascot_top" numeric DEFAULT 4536,
  	"layout_mobile_mascot_top" numeric DEFAULT 1402,
  	"featured_event_info_label" varchar DEFAULT '>> INFO' NOT NULL,
  	"featured_event_info_href" varchar DEFAULT '/eventos' NOT NULL,
  	"featured_event_type_label" varchar DEFAULT 'Tipo do evento' NOT NULL,
  	"featured_event_type" varchar DEFAULT 'Jogatina mensal' NOT NULL,
  	"featured_event_location_label" varchar DEFAULT 'Local:' NOT NULL,
  	"featured_event_address" varchar DEFAULT 'Galeria Hora Center
  Rua da Hora, 345 - Espinheiro' NOT NULL,
  	"featured_event_price" varchar DEFAULT 'Valor: R$10 (pago no local)',
  	"featured_event_button_label" varchar DEFAULT 'Inscreva-se' NOT NULL,
  	"featured_event_button_href" varchar DEFAULT '/eventos' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "community_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "community" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Comunidade de Anime Fighters em Recife' NOT NULL,
  	"seo_description" varchar DEFAULT 'Conheça a R-DASH, a comunidade de jogos de luta em Recife.' NOT NULL,
  	"title" varchar DEFAULT 'COMUNIDADE' NOT NULL,
  	"subtitle" varchar DEFAULT 'Saiba mais sobre a nossa comunidade!' NOT NULL,
  	"hero_alt" varchar DEFAULT 'Jogadores participando de um encontro da comunidade R-DASH' NOT NULL,
  	"location_alt" varchar DEFAULT 'Partida de jogo de luta em uma TV durante um encontro R-DASH' NOT NULL,
  	"who_title" varchar DEFAULT 'QUEM SOMOS?' NOT NULL,
  	"who_text" varchar DEFAULT 'Somos uma comunidade Recifense focada em Anime Fighters. Temos encontros mensais com torneios e premiações.' NOT NULL,
  	"where_title" varchar DEFAULT 'ONDE ESTAMOS?' NOT NULL,
  	"where_text" varchar DEFAULT 'Nossos encontros variam de local, você pode saber mais acompanhando nossas redes sociais ou se juntando aos nossos grupos.' NOT NULL,
  	"join_enabled" boolean DEFAULT true,
  	"join_title" varchar DEFAULT 'JUNTE-SE A NÓS' NOT NULL,
  	"join_text" varchar DEFAULT 'Faça parte da nossa comunidade!' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "events_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Eventos e torneios' NOT NULL,
  	"seo_description" varchar DEFAULT 'Confira os próximos encontros e torneios da R-DASH em Recife.' NOT NULL,
  	"title" varchar DEFAULT 'PRÓXIMOS EVENTOS' NOT NULL,
  	"past_title" varchar DEFAULT 'EVENTOS ANTERIORES' NOT NULL,
  	"mobile_title" varchar DEFAULT 'EVENTOS' NOT NULL,
  	"subtitle" varchar DEFAULT 'Confira e se inscreva em nossos próximos eventos.' NOT NULL,
  	"list_title" varchar DEFAULT 'EM BREVE...' NOT NULL,
  	"upcoming_label" varchar DEFAULT 'Próximos' NOT NULL,
  	"past_label" varchar DEFAULT 'Anteriores' NOT NULL,
  	"leaderboard_label" varchar DEFAULT 'Leaderboard' NOT NULL,
  	"search_label" varchar DEFAULT 'Buscar eventos' NOT NULL,
  	"empty_label" varchar DEFAULT 'Nenhum evento encontrado.' NOT NULL,
  	"more_label" varchar DEFAULT 'Ver mais' NOT NULL,
  	"subscribe_label" varchar DEFAULT 'Inscreva-se' NOT NULL,
  	"records_label" varchar DEFAULT 'Ver registros' NOT NULL,
  	"back_label" varchar DEFAULT 'Voltar aos eventos' NOT NULL,
  	"past_message" varchar DEFAULT 'Esse evento já passou!' NOT NULL,
  	"details_message" varchar DEFAULT 'Consulte os detalhes e a inscrição nas nossas redes.' NOT NULL,
  	"date_label" varchar DEFAULT 'Data:' NOT NULL,
  	"location_label" varchar DEFAULT 'Local:' NOT NULL,
  	"price_label" varchar DEFAULT 'Valor da Inscrição:' NOT NULL,
  	"banner_alt" varchar DEFAULT 'Prepare-se: novidades de Street Fighter, dia 10 de junho' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "gallery_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Galeria de eventos e encontros' NOT NULL,
  	"seo_description" varchar DEFAULT 'Reviva os torneios, encontros e noites de jogos da comunidade R-DASH em Recife na galeria de fotos.' NOT NULL,
  	"title" varchar DEFAULT 'GALERIA' NOT NULL,
  	"subtitle" varchar DEFAULT 'Fotos dos campeonatos, encontros e eventos da comunidade' NOT NULL,
  	"more_label" varchar DEFAULT 'Veja os registros' NOT NULL,
  	"search_label" varchar DEFAULT 'Buscar álbuns' NOT NULL,
  	"input_label" varchar DEFAULT 'Nome do álbum' NOT NULL,
  	"submit_label" varchar DEFAULT 'Buscar' NOT NULL,
  	"empty_label" varchar DEFAULT 'Nenhum álbum encontrado.' NOT NULL,
  	"all_label" varchar DEFAULT 'Ver todos' NOT NULL,
  	"back_label" varchar DEFAULT 'Voltar à galeria' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "leaderboard_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seo_title" varchar DEFAULT 'Ranking de jogadores' NOT NULL,
  	"seo_description" varchar DEFAULT 'Conheça os jogadores em destaque na comunidade R-DASH.' NOT NULL,
  	"title" varchar DEFAULT 'LEADERBOARD' NOT NULL,
  	"subtitle" varchar DEFAULT 'Confira os jogadores que estão no
  nosso TOP 3.' NOT NULL,
  	"rank_label" varchar DEFAULT '#' NOT NULL,
  	"player_label" varchar DEFAULT 'Jogador' NOT NULL,
  	"score_label" varchar DEFAULT 'Score' NOT NULL,
  	"search_label" varchar DEFAULT 'Buscar jogadores' NOT NULL,
  	"empty_label" varchar DEFAULT 'Nenhum jogador encontrado.' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "visual_assets_assets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"upload_id" integer
  );
  
  CREATE TABLE "visual_assets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_image_upload_id_media_id_fk" FOREIGN KEY ("image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_mobile_image_upload_id_media_id_fk" FOREIGN KEY ("mobile_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_detail_image_upload_id_media_id_fk" FOREIGN KEY ("detail_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "albums_photos" ADD CONSTRAINT "albums_photos_image_upload_id_media_id_fk" FOREIGN KEY ("image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "albums_photos" ADD CONSTRAINT "albums_photos_mobile_image_upload_id_media_id_fk" FOREIGN KEY ("mobile_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "albums_photos" ADD CONSTRAINT "albums_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."albums"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "albums" ADD CONSTRAINT "albums_image_upload_id_media_id_fk" FOREIGN KEY ("image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "albums" ADD CONSTRAINT "albums_mobile_image_upload_id_media_id_fk" FOREIGN KEY ("mobile_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news" ADD CONSTRAINT "news_image_upload_id_media_id_fk" FOREIGN KEY ("image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "games" ADD CONSTRAINT "games_image_upload_id_media_id_fk" FOREIGN KEY ("image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "players" ADD CONSTRAINT "players_image_upload_id_media_id_fk" FOREIGN KEY ("image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_albums_fk" FOREIGN KEY ("albums_id") REFERENCES "public"."albums"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_games_fk" FOREIGN KEY ("games_id") REFERENCES "public"."games"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_players_fk" FOREIGN KEY ("players_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_navigation" ADD CONSTRAINT "site_navigation_image_upload_id_media_id_fk" FOREIGN KEY ("image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_navigation" ADD CONSTRAINT "site_navigation_active_image_upload_id_media_id_fk" FOREIGN KEY ("active_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_navigation" ADD CONSTRAINT "site_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_footer_links" ADD CONSTRAINT "site_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_footer_social" ADD CONSTRAINT "site_footer_social_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "community_links" ADD CONSTRAINT "community_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."community"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "visual_assets_assets" ADD CONSTRAINT "visual_assets_assets_upload_id_media_id_fk" FOREIGN KEY ("upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "visual_assets_assets" ADD CONSTRAINT "visual_assets_assets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."visual_assets"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "events_slug_idx" ON "events" USING btree ("slug");
  CREATE INDEX "events_image_upload_idx" ON "events" USING btree ("image_upload_id");
  CREATE INDEX "events_mobile_image_upload_idx" ON "events" USING btree ("mobile_image_upload_id");
  CREATE INDEX "events_detail_image_upload_idx" ON "events" USING btree ("detail_image_upload_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "albums_photos_order_idx" ON "albums_photos" USING btree ("_order");
  CREATE INDEX "albums_photos_parent_id_idx" ON "albums_photos" USING btree ("_parent_id");
  CREATE INDEX "albums_photos_image_upload_idx" ON "albums_photos" USING btree ("image_upload_id");
  CREATE INDEX "albums_photos_mobile_image_upload_idx" ON "albums_photos" USING btree ("mobile_image_upload_id");
  CREATE UNIQUE INDEX "albums_slug_idx" ON "albums" USING btree ("slug");
  CREATE INDEX "albums_image_upload_idx" ON "albums" USING btree ("image_upload_id");
  CREATE INDEX "albums_mobile_image_upload_idx" ON "albums" USING btree ("mobile_image_upload_id");
  CREATE INDEX "albums_updated_at_idx" ON "albums" USING btree ("updated_at");
  CREATE INDEX "albums_created_at_idx" ON "albums" USING btree ("created_at");
  CREATE INDEX "news_image_upload_idx" ON "news" USING btree ("image_upload_id");
  CREATE INDEX "news_updated_at_idx" ON "news" USING btree ("updated_at");
  CREATE INDEX "news_created_at_idx" ON "news" USING btree ("created_at");
  CREATE INDEX "games_image_upload_idx" ON "games" USING btree ("image_upload_id");
  CREATE INDEX "games_updated_at_idx" ON "games" USING btree ("updated_at");
  CREATE INDEX "games_created_at_idx" ON "games" USING btree ("created_at");
  CREATE INDEX "players_image_upload_idx" ON "players" USING btree ("image_upload_id");
  CREATE INDEX "players_updated_at_idx" ON "players" USING btree ("updated_at");
  CREATE INDEX "players_created_at_idx" ON "players" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_albums_id_idx" ON "payload_locked_documents_rels" USING btree ("albums_id");
  CREATE INDEX "payload_locked_documents_rels_news_id_idx" ON "payload_locked_documents_rels" USING btree ("news_id");
  CREATE INDEX "payload_locked_documents_rels_games_id_idx" ON "payload_locked_documents_rels" USING btree ("games_id");
  CREATE INDEX "payload_locked_documents_rels_players_id_idx" ON "payload_locked_documents_rels" USING btree ("players_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_navigation_order_idx" ON "site_navigation" USING btree ("_order");
  CREATE INDEX "site_navigation_parent_id_idx" ON "site_navigation" USING btree ("_parent_id");
  CREATE INDEX "site_navigation_image_upload_idx" ON "site_navigation" USING btree ("image_upload_id");
  CREATE INDEX "site_navigation_active_image_upload_idx" ON "site_navigation" USING btree ("active_image_upload_id");
  CREATE INDEX "site_footer_links_order_idx" ON "site_footer_links" USING btree ("_order");
  CREATE INDEX "site_footer_links_parent_id_idx" ON "site_footer_links" USING btree ("_parent_id");
  CREATE INDEX "site_footer_social_order_idx" ON "site_footer_social" USING btree ("_order");
  CREATE INDEX "site_footer_social_parent_id_idx" ON "site_footer_social" USING btree ("_parent_id");
  CREATE INDEX "community_links_order_idx" ON "community_links" USING btree ("_order");
  CREATE INDEX "community_links_parent_id_idx" ON "community_links" USING btree ("_parent_id");
  CREATE INDEX "visual_assets_assets_order_idx" ON "visual_assets_assets" USING btree ("_order");
  CREATE INDEX "visual_assets_assets_parent_id_idx" ON "visual_assets_assets" USING btree ("_parent_id");
  CREATE INDEX "visual_assets_assets_upload_idx" ON "visual_assets_assets" USING btree ("upload_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "albums_photos" CASCADE;
  DROP TABLE "albums" CASCADE;
  DROP TABLE "news" CASCADE;
  DROP TABLE "games" CASCADE;
  DROP TABLE "players" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "installation" CASCADE;
  DROP TABLE "site_navigation" CASCADE;
  DROP TABLE "site_footer_links" CASCADE;
  DROP TABLE "site_footer_social" CASCADE;
  DROP TABLE "site" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "community_links" CASCADE;
  DROP TABLE "community" CASCADE;
  DROP TABLE "events_page" CASCADE;
  DROP TABLE "gallery_page" CASCADE;
  DROP TABLE "leaderboard_page" CASCADE;
  DROP TABLE "visual_assets_assets" CASCADE;
  DROP TABLE "visual_assets" CASCADE;
  DROP TYPE "public"."enum_events_status";`)
}
