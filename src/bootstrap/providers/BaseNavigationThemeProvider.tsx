import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';

/**
 * Wether to render `DarkTheme` or `DefaultTheme` based on the user color scheme.
 */
export function BaseNavigationThemeProvider({ children }: PropsWithChildren) {
  const scheme = useColorScheme();

  return (
    <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>
  );
}
