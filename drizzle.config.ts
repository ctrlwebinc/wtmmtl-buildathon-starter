import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/infrastructure/db/schema/**/*',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: './data/app.db',
  },
});
