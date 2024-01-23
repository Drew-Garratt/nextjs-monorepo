import type { FC, PropsWithChildren } from 'react';
import { AppProviders } from '../../src/providers/app-providers';

export const AppTestProviders: FC<PropsWithChildren> = ({ children }) => {
  return <AppProviders lang="en">{children}</AppProviders>;
};
