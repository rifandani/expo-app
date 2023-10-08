import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { BaseFontProvider } from '#bootstrap/providers/BaseFontProvider';
import { BaseI18nProvider } from '#bootstrap/providers/BaseI18nProvider';
import { BaseNavigationThemeProvider } from '#bootstrap/providers/BaseNavigationThemeProvider';
import { BaseTamaguiProvider } from '#bootstrap/providers/BaseTamaguiProvider';
import { BaseToastProvider } from '#bootstrap/providers/BaseToastProvider';
import { BaseQueryProvider } from '#bootstrap/providers/query/BaseQueryProvider';
import { AnimatedSplashScreen } from '#bootstrap/splash-screen/AnimatedSplashScreen';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function RootLayout() {
  return (
    <AnimatedSplashScreen>
      <BaseQueryProvider>
        <BaseFontProvider>
          <BaseTamaguiProvider>
            <BaseI18nProvider>
              <BaseToastProvider>
                <BaseNavigationThemeProvider>
                  <Stack />
                </BaseNavigationThemeProvider>
              </BaseToastProvider>
            </BaseI18nProvider>
          </BaseTamaguiProvider>
        </BaseFontProvider>
      </BaseQueryProvider>
    </AnimatedSplashScreen>
  );
}
