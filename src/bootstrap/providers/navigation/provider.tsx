import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useNavigationContainerRef } from 'expo-router';
import { PropsWithChildren, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { useAppStore } from '#shared/hooks/use-app-store';

/**
 * Wether to render `DarkTheme` or `DefaultTheme` based on the user color scheme.
 * Also includes react navigation devtools in development.
 */
export function AppNavigationProvider({ children }: PropsWithChildren) {
  const navigationRef = useNavigationContainerRef();
  const scheme = useColorScheme();
  const theme = useAppStore((state) => state.theme);
  const value = useMemo(
    () =>
      theme === 'system'
        ? scheme === 'dark'
          ? DarkTheme
          : DefaultTheme
        : theme === 'dark'
          ? DarkTheme
          : DefaultTheme,
    [scheme, theme]
  );

  useReactNavigationDevTools(navigationRef);

  return <ThemeProvider value={value}>{children}</ThemeProvider>;
}
