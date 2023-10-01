import { useFonts } from 'expo-font';
import { PropsWithChildren } from 'react';

/**
 * Load all required fonts.
 * Returns `null` if not loaded yet or there are errors.
 */
export function BaseFontProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  // Prevent rendering until the font has loaded or an error was returned
  if (!loaded || error) {
    return null;
  }

  return children;
}
