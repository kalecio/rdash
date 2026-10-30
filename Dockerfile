FROM node:24.22.1-bookworm-slim AS dependencies
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable && corepack prepare pnpm@10.34.5 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM dependencies AS builder
COPY . .
# Used only to compile dynamic routes; the production secret is injected at runtime.
RUN PAYLOAD_SECRET=build-only-not-a-runtime-secret DATABASE_URL=file:/tmp/rdash-build.db pnpm build

FROM node:24.22.1-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0
COPY --from=builder --chown=node:node /app ./
RUN mkdir -p /app/media /app/data && chown -R node:node /app/media /app/data
USER node
EXPOSE 3000
CMD ["node", "node_modules/next/dist/bin/next", "start", "--hostname", "0.0.0.0"]
