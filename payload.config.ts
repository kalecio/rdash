import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { pt } from '@payloadcms/translations/languages/pt'
import { en } from '@payloadcms/translations/languages/en'
import sharp from 'sharp'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { collections, globals } from './cms/config'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const databaseURL = process.env.DATABASE_URL || `file:${path.resolve(dirname, 'data/rdash.db')}`
if (!process.env.PAYLOAD_SECRET) throw new Error('Defina PAYLOAD_SECRET no arquivo .env antes de iniciar o CMS.')

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: { user: 'users', meta: { titleSuffix: ' | R-DASH Admin' }, importMap: { baseDir: dirname } },
  i18n: { supportedLanguages: { pt, en }, fallbackLanguage: 'pt' },
  collections, globals, sharp,
  email: process.env.SMTP_HOST ? nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_FROM || 'no-reply@rdash.local',
    defaultFromName: 'R-DASH',
    transportOptions: { host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: process.env.SMTP_SECURE === 'true', auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD } : undefined },
  }) : undefined,
  db: databaseURL.startsWith('postgres')
    ? postgresAdapter({ pool: { connectionString: databaseURL }, push: false, migrationDir: path.resolve(dirname, 'cms/migrations/postgres') })
    : sqliteAdapter({ client: { url: databaseURL }, migrationDir: path.resolve(dirname, 'cms/migrations/sqlite') }),
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  upload: { limits: { fileSize: 20_000_000 } },
  graphQL: { disable: true },
})
