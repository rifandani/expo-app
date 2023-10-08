import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';

import { useAppStore } from '#shared/hooks/useAppStore.hook';

/**
 * Wether to render `DarkTheme` or `DefaultTheme` based on the user color scheme.
 *
 * theme === "system" -> scheme === 'dark' ? DarkTheme : DefaultTheme
 * theme === 'dark' ? DarkTheme : DefaultTheme
 */
export function BaseNavigationThemeProvider({ children }: PropsWithChildren) {
  const scheme = useColorScheme();
  const theme = useAppStore((state) => state.theme);

  const themeMapper = () => {
    if (theme === 'system') {
      return scheme === 'dark' ? DarkTheme : DefaultTheme;
    }

    return theme === 'dark' ? DarkTheme : DefaultTheme;
  };

  return <ThemeProvider value={themeMapper()}>{children}</ThemeProvider>;
}
