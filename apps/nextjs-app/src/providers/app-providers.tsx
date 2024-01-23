import { nextSetupI18n } from '@/lib/i18n/i18n';

import { ClientProviders } from './client-providers';

interface ProvidersProps {
  children?: React.ReactNode;
  lang: string;
}

export async function AppProviders({ children, lang }: ProvidersProps) {
  const i18nSetupData = await nextSetupI18n({ locale: lang });

  return (
    <ClientProviders i18nSetupData={i18nSetupData}>{children}</ClientProviders>
  );
}
