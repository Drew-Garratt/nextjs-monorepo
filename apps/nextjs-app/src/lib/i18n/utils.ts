/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { I18n, Messages } from '@lingui/core';
import { cache } from 'react';

export async function loadCatalog(locale: string): Promise<Messages> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const catalog = await import(`@lingui/loader!../../locales/${locale}.po`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return catalog.messages;
  } catch (e) {
    console.error(`No catalog for locale "${locale}"`);
    return {};
  }
}

export function setI18n(locale: I18n) {
  getLocaleCtx().current = locale;
}

export function getI18n(): I18n | undefined {
  return getLocaleCtx().current;
}

const getLocaleCtx = cache((): { current: I18n | undefined } => {
  return { current: undefined };
});
