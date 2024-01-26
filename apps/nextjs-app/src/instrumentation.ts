import { buildEnv } from './config/build-env.config.mjs';

export async function register() {
  if (
    process.env.NEXT_RUNTIME === 'nodejs' &&
    buildEnv.NEXT_BUILD_ENV_MSW_ENABLED
  ) {
    await import('./lib/msw/serverWorker');
  }
}
