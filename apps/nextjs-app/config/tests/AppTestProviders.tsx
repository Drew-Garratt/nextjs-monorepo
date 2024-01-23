import type { FC, PropsWithChildren } from 'react';
import { AppProviders } from '../../src/providers/app-providers';
import { I18nextTestStubProvider } from './I18nextTestStubProvider';

export const AppTestProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppProviders lang="en">
      <I18nextTestStubProvider>{children}</I18nextTestStubProvider>
    </AppProviders>
  );
};
