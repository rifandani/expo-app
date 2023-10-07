import { useLocales } from 'expo-localization';
import { useFocusEffect } from 'expo-router';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import '#bootstrap/polyfills/Intl';
import TypesafeI18n from '#i18n/i18n-react';
import { Locales } from '#i18n/i18n-types';
import { isLocale } from '#i18n/i18n-util';
import { loadLocaleAsync } from '#i18n/i18n-util.async';

export function BaseI18nProvider({ children }: PropsWithChildren) {
  const [localeLoaded, setLocaleLoaded] = useState<Locales | null>(null);

  // Get default locale from device settings
  const locales = useLocales();
  const locale = useMemo(
    () => locales.map((_locale) => _locale.languageTag).find(isLocale) ?? 'en',
    [locales]
  );

  // Load and update locales
  useFocusEffect(
    useCallback(() => {
      loadLocaleAsync(locale).then(() => {
        setLocaleLoaded(locale);
      });
    }, [locale])
  );

  if (!localeLoaded) return null;

  return <TypesafeI18n locale={localeLoaded}>{children}</TypesafeI18n>;
}
