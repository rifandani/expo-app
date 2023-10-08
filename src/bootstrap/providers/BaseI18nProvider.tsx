import '#bootstrap/polyfills/Intl';
import { getLocales } from 'expo-localization';
import { useFocusEffect } from 'expo-router';
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { LocaleDetector } from 'typesafe-i18n/detectors';

import TypesafeI18n, { useI18nContext } from '#i18n/i18n-react';
import { Locales } from '#i18n/i18n-types';
import { baseLocale, detectLocale, isLocale } from '#i18n/i18n-util';
import { loadLocale } from '#i18n/i18n-util.sync';

const systemSettingsDetector: LocaleDetector = () =>
  getLocales().map((_locale) => _locale.languageTag);

function AppStateLanguageListener({ children }: PropsWithChildren) {
  const appState = useRef(AppState.currentState);
  const { setLocale } = useI18nContext();

  const recalibrateLocale = useCallback(() => {
    const locale = systemSettingsDetector().find(isLocale) ?? baseLocale;
    loadLocale(locale);
    setLocale(locale);
  }, [setLocale]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      // App has come to the foreground
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        recalibrateLocale();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [recalibrateLocale]);

  return children;
}

export function BaseI18nProvider({ children }: PropsWithChildren) {
  const [localeLoaded, setLocaleLoaded] = useState<Locales | null>(null);

  // Load and update locales for the first time
  useFocusEffect(
    useCallback(() => {
      const detectedLocale = detectLocale(systemSettingsDetector);
      loadLocale(detectedLocale);
      setLocaleLoaded(detectedLocale);
    }, [])
  );

  if (!localeLoaded) return null;

  return (
    <TypesafeI18n locale={localeLoaded}>
      <AppStateLanguageListener>{children}</AppStateLanguageListener>
    </TypesafeI18n>
  );
}
