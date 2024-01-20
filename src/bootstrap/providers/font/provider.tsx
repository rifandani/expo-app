import { useFonts } from 'expo-font';
import { PropsWithChildren, useEffect } from 'react';

/**
 * Load all required fonts.
 * Returns `null` if fonts not loaded yet.
 * Throws error if there are errors.
 *
 * @deprecated Expo SDK 50 comes with config plugin, embeds font in native project
 */
export function AppFontProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    'Inter-MediumItalic': require('@tamagui/font-inter/otf/Inter-MediumItalic.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    'Inter-BoldItalic': require('@tamagui/font-inter/otf/Inter-BoldItalic.otf'),
    // 'Inter-Light': require('@tamagui/font-inter/otf/Inter-Light.otf'),
    // 'Inter-LightItalic': require('@tamagui/font-inter/otf/Inter-LightItalic.otf'),
    // 'Inter-SemiBold': require('@tamagui/font-inter/otf/Inter-SemiBold.otf'),
    // 'Inter-SemiBoldItalic': require('@tamagui/font-inter/otf/Inter-SemiBoldItalic.otf'),
    // 'Inter-Thin': require('@tamagui/font-inter/otf/Inter-Thin.otf'),
    // 'Inter-ThinItalic': require('@tamagui/font-inter/otf/Inter-ThinItalic.otf'),
  });

  useEffect(() => {
    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    if (error) throw error;
  }, [error]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!loaded) return null;

  return children;
}
