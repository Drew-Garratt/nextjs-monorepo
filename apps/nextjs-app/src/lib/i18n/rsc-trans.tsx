'use server';

import { TransNoContext, type TransProps } from '@lingui/react/server';
import { cookies } from 'next/headers';

import { nextSetupI18n } from './i18n';
import { getI18n } from './utils';

export async function Trans(props: TransProps) {
  let i18n = getI18n();

  // If no i18n server cache is available, we need to initialize it
  if (!i18n) {
    const cookiesList = cookies();
    const localeCookie = cookiesList.get('NEXT_LOCALE');

    const lang = localeCookie?.value ?? 'en';

    await nextSetupI18n({ locale: lang });

    i18n = getI18n();
  }

  // If i18n is still not available, throw an error
  if (!i18n) {
    throw new Error('i18n not initialized');
  }

  return <TransNoContext {...props} lingui={{ i18n }} />;
}
