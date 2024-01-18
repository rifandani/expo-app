import { useLocales } from 'expo-localization';
import { useMemo } from 'react';

import { baseLocale, isLocale } from '#i18n/i18n-util';

/**
 * hooks to get current system language
 */
export function useLocale() {
  const locales = useLocales();
  const locale = useMemo(
    () => locales.map((_locale) => _locale.languageTag).find(isLocale) ?? baseLocale,
    [locales]
  );

  return locale;
}
