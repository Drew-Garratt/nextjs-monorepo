import { setupServer } from 'msw/node';
import { handlers } from '@/mocks/handlers';

export function serverWorker() {
  const server = setupServer();
  server.use(...handlers);
  server.listen();
  return server;
}

export default serverWorker();
