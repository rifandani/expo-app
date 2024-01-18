import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';

import { useAppStore } from '#shared/hooks/use-app-store';

/**
 * Wether to render `DarkTheme` or `DefaultTheme` based on the user color scheme.
 *
 * theme === "system" -> scheme === 'dark' ? DarkTheme : DefaultTheme
 * theme === 'dark' ? DarkTheme : DefaultTheme
 */
export function AppNavigationThemeProvider({ children }: PropsWithChildren) {
  const scheme = useColorScheme();
  const theme = useAppStore((state) => state.theme);

  return (
    <ThemeProvider
      value={
        theme === 'system'
          ? scheme === 'dark'
            ? DarkTheme
            : DefaultTheme
          : theme === 'dark'
          ? DarkTheme
          : DefaultTheme
      }>
      {children}
    </ThemeProvider>
  );
}
