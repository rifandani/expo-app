import '#bootstrap/polyfills/Intl';
import { useLocales } from 'expo-localization';
import { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { AppState } from 'react-native';

import TypesafeI18n from '#i18n/i18n-react';
import { Locales } from '#i18n/i18n-types';
import { isLocale } from '#i18n/i18n-util';
import { loadLocale } from '#i18n/i18n-util.sync';

export function BaseI18nProvider({ children }: PropsWithChildren) {
  const [localeLoaded, setLocaleLoaded] = useState<Locales | null>(null);
  const appState = useRef(AppState.currentState);

  // Get default locale from device settings
  const locales = useLocales();
  const locale = useMemo(
    () => locales.map((_locale) => _locale.languageTag).find(isLocale) ?? 'en-US',
    [locales]
  );
  console.log('🚀 ~ file: BaseI18nProvider.tsx:20 ~ BaseI18nProvider ~ localeLoaded:', {
    localeLoaded,
  });

  // Load and update locales
  useEffect(() => {
    console.log('🚀 ~ file: BaseI18nProvider.tsx:29 ~ loadLocaleAsync ~ locale:', locale);
    loadLocale(locale);
    setLocaleLoaded(locale);
  }, [locale]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      console.log(
        '🚀 ~ file: BaseI18nProvider.tsx:34 ~ subscription ~ nextAppState:',
        nextAppState
      );
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      // setAppStateVisible(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (!localeLoaded) return null;

  return <TypesafeI18n locale={localeLoaded}>{children}</TypesafeI18n>;
}
