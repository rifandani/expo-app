import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { useAppStore } from '#shared/hooks/use-app-store';

/**
 * Wether to render `DarkTheme` or `DefaultTheme` based on the user color scheme.
 */
export function AppNavigationThemeProvider({ children }: PropsWithChildren) {
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

  return <ThemeProvider value={value}>{children}</ThemeProvider>;
}
