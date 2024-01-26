import { test as base } from '@playwright/test';
import { graphql, http } from 'msw';
import type { SetupServer } from 'msw/node';
import { createWorker, type MockServiceWorker } from 'playwright-msw';
import { handlers } from '@/mocks/handlers';

export const test = base.extend<{
  serverWorker: SetupServer;
  worker: MockServiceWorker;
  http: typeof http;
  graphql: typeof graphql;
}>({
  /**
   * Server Worker WIP
   * Server fixtures are not currently test injectable
   * @see https://github.com/mswjs/msw/issues/1644#issuecomment-1909864409
   * @see https://github.com/vercel/next.js/discussions/56446
   */
  serverWorker: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      const { serverWorker } = await import('@/lib/msw/serverWorker');
      await use(serverWorker());
    },
    {
      scope: 'test',
      auto: true,
    },
  ],
  worker: [
    async ({ page }, use) => {
      const server = await createWorker(page, handlers);
      // Test has not started to execute...
      await use(server);
      // Test has finished executing...
    },
    {
      /**
       * Scope this fixture on a per test basis to ensure that each test has a
       * fresh copy of MSW. Note: the scope MUST be "test" to be able to use the
       * `page` fixture as it is not possible to access it when scoped to the
       * "worker".
       */
      scope: 'test',
      /**
       * By default, fixtures are lazy; they will not be initalised unless they're
       * used by the test. Setting `true` here means that the fixture will be auto-
       * initialised even if the test doesn't use it.
       */
      auto: true,
    },
  ],
  http,
  graphql,
});
