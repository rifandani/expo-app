import { useFonts } from 'expo-font';
import { PropsWithChildren, useEffect } from 'react';

/**
 * Load all required fonts.
 * Returns `null` if fonts not loaded yet.
 * Throws error if there are errors.
 */
export function BaseFontProvider({ children }: PropsWithChildren) {
  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    // 'Inter-Black': require('@tamagui/font-inter/otf/Inter-Black.otf'),
    // 'Inter-BlackItalic': require('@tamagui/font-inter/otf/Inter-BlackItalic.otf'),
    // 'Inter-Bold': require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    // 'Inter-BoldItalic': require('@tamagui/font-inter/otf/Inter-BoldItalic.otf'),
    // 'Inter-ExtraBold': require('@tamagui/font-inter/otf/Inter-ExtraBold.otf'),
    // 'Inter-ExtraBoldItalic': require('@tamagui/font-inter/otf/Inter-ExtraBoldItalic.otf'),
    // 'Inter-ExtraLight': require('@tamagui/font-inter/otf/Inter-ExtraLight.otf'),
    // 'Inter-ExtraLightItalic': require('@tamagui/font-inter/otf/Inter-ExtraLightItalic.otf'),
    // 'Inter-Italic': require('@tamagui/font-inter/otf/Inter-Italic.otf'),
    // 'Inter-Light': require('@tamagui/font-inter/otf/Inter-Light.otf'),
    // 'Inter-LightItalic': require('@tamagui/font-inter/otf/Inter-LightItalic.otf'),
    // 'Inter-Medium': require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    // 'Inter-MediumItalic': require('@tamagui/font-inter/otf/Inter-MediumItalic.otf'),
    // 'Inter-SemiBold': require('@tamagui/font-inter/otf/Inter-SemiBold.otf'),
    // 'Inter-SemiBoldItalic': require('@tamagui/font-inter/otf/Inter-SemiBoldItalic.otf'),
    // 'Inter-Thin': require('@tamagui/font-inter/otf/Inter-Thin.otf'),
    // 'Inter-ThinItalic': require('@tamagui/font-inter/otf/Inter-ThinItalic.otf'),
    // Silkscreen: require('@tamagui/font-silkscreen/files/slkscr.ttf'),
    // 'Silkscreen-Bold': require('@tamagui/font-silkscreen/files/slkscrb.ttf'),
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
