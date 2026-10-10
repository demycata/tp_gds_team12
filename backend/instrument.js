import dotenv from 'dotenv';
import { resolve } from 'path';
import * as Sentry from '@sentry/node';

if (!process.env.SENTRY_DSN) {
  dotenv.config({ path: resolve(process.cwd(), '../.env') });
}

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
});
