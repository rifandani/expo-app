import '#bootstrap/polyfills/Intl';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';

import TypesafeI18n, { useI18nContext } from '#i18n/i18n-react';
import { Locales } from '#i18n/i18n-types';
import { loadLocale } from '#i18n/i18n-util.sync';
import { useLocale } from '#shared/hooks/useLocale.hook';

function AppStateLanguageListener({ children }: PropsWithChildren) {
  const { setLocale } = useI18nContext();
  const locale = useLocale();
  const appState = useRef(AppState.currentState);

  // Detect when user changing system language by listening to AppState and change the locale based on it
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      // App has come to the foreground
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        loadLocale(locale);
        setLocale(locale);
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [locale, setLocale]);

  return children;
}

export function BaseI18nProvider({ children }: PropsWithChildren) {
  const locale = useLocale();
  const [localeLoaded, setLocaleLoaded] = useState<Locales | null>(null);

  // Load and update locales for the first time
  useEffect(() => {
    loadLocale(locale);
    setLocaleLoaded(locale);
  }, [locale]);

  if (!localeLoaded) return null;

  return (
    <TypesafeI18n locale={localeLoaded}>
      <AppStateLanguageListener>{children}</AppStateLanguageListener>
    </TypesafeI18n>
  );
}
