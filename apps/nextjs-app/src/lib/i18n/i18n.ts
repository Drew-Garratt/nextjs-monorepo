import { setupI18n } from '@lingui/core';
import { loadCatalog, setI18n } from './utils';

export async function nextSetupI18n({ locale }: { locale: string }) {
  const catalog = await loadCatalog(locale);

  const setupData = {
    locale,
    messages: { [locale]: catalog },
  };

  const i18n = setupI18n(setupData);

  setI18n(i18n);

  return {
    locale,
    messages: { [locale]: catalog },
  };
}
