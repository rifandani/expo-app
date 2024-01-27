import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { AppI18nProvider } from '#bootstrap/providers/i18n/provider';
import { AppNavigationProvider } from '#bootstrap/providers/navigation/provider';
import { AppQueryProvider } from '#bootstrap/providers/query/provider';
import { AppTamaguiProvider } from '#bootstrap/providers/tamagui/provider';
import { AppToastProvider } from '#bootstrap/providers/toast/provider';
import { SplashScreenWrapper } from '#bootstrap/splash-screen/wrapper';
import { useI18nContext } from '#i18n/i18n-react';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

function App() {
  const { LL } = useI18nContext();

  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen
        name="login"
        options={{
          title: LL.forms.login(),
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SplashScreenWrapper>
      <AppI18nProvider>
        <AppQueryProvider>
          <AppTamaguiProvider>
            <AppNavigationProvider>
              <AppToastProvider>
                <App />
              </AppToastProvider>
            </AppNavigationProvider>
          </AppTamaguiProvider>
        </AppQueryProvider>
      </AppI18nProvider>
    </SplashScreenWrapper>
  );
}
