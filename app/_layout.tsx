import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { AppI18nProvider } from '#bootstrap/providers/i18n/provider';
import { AppNavigationThemeProvider } from '#bootstrap/providers/navigation-theme/provider';
import { AppQueryProvider } from '#bootstrap/providers/query/provider';
import { AppTamaguiProvider } from '#bootstrap/providers/tamagui/provider';
import { AppToastProvider } from '#bootstrap/providers/toast/provider';
import { SplashScreenWrapper } from '#bootstrap/splash-screen/wrapper';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function RootLayout() {
  return (
    <SplashScreenWrapper>
      {/* <AppFontProvider> */}
      <AppI18nProvider>
        <AppQueryProvider>
          <AppTamaguiProvider>
            <AppNavigationThemeProvider>
              <AppToastProvider>
                <Stack />
              </AppToastProvider>
            </AppNavigationThemeProvider>
          </AppTamaguiProvider>
        </AppQueryProvider>
      </AppI18nProvider>
      {/* </AppFontProvider> */}
    </SplashScreenWrapper>
  );
}
