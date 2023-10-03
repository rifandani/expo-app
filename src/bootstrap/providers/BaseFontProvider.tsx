import { useFonts } from 'expo-font';
import { PropsWithChildren, useEffect } from 'react';

/**
 * Load all required fonts.
 * Returns `null` if not loaded yet or there are errors.
 */
export function BaseFontProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!loaded) {
    return null;
  }

  return children;
}
