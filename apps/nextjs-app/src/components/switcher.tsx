'use client';

import type { MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { useRouter, usePathname } from 'next/navigation';

type LOCALES = 'en' | 'de' | 'pseudo';

const languages: Record<string, MessageDescriptor> = {
  en: msg`English`,
  de: msg`Deutsch`,
};

export function Switcher() {
  const router = useRouter();
  const { i18n } = useLingui();
  const pathname = usePathname();

  // router.
  // const [locale, setLocale] = useState<LOCALES>(
  //   router.locale!.split('-')[0] as LOCALES
  // )

  // disabled for DEMO - so we can demonstrate the 'pseudo' locale functionality
  // if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
  //   languages['pseudo'] = t`Pseudo`
  // }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value as LOCALES;
    router.push(pathname.replace(`/${i18n.locale}`, `/${newLocale}`));
  }

  function languageString(
    messageDescriptor: MessageDescriptor | undefined
  ): string {
    if (!messageDescriptor) return '';
    return i18n._(messageDescriptor);
  }

  return (
    <select
      aria-label="language switcher"
      value={i18n.locale}
      onChange={handleChange}
    >
      {Object.keys(languages).map((locale) => {
        return (
          <option value={locale} key={locale}>
            {languageString(languages[locale])}
          </option>
        );
      })}
    </select>
  );
}
