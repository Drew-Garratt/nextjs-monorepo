'use client';

import type { AllMessages } from '@lingui/core';
import { ThemeProvider } from 'next-themes';

import { LinguiProvider } from '@/lib/i18n/lingui-provider';

interface ClientProvidersProps {
  children?: React.ReactNode;
  i18nSetupData: {
    locale: string;
    messages: AllMessages;
  };
}

export function ClientProviders({
  children,
  i18nSetupData,
}: ClientProvidersProps) {
  return (
    <LinguiProvider {...i18nSetupData}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LinguiProvider>
  );
}
