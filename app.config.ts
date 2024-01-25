import { type ConfigContext, type ExpoConfig } from 'expo/config';

/**
 * so that we can install different app based on the variant without overriding previous installed app
 */
const bundleId =
  process.env.APP_VARIANT === 'development'
    ? 'com.rifandani.expoapp.development'
    : process.env.APP_VARIANT === 'test'
      ? 'com.rifandani.expoapp.test'
      : 'com.rifandani.expoapp';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    experiments: {
      typedRoutes: true,
    },
    plugins: [
      'expo-localization',
      'expo-router',
      [
        'expo-font',
        {
          fonts: [
            'node_modules/@tamagui/font-inter/otf/Inter-Black.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-BlackItalic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-Bold.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-BoldItalic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-ExtraBold.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-ExtraBoldItalic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-ExtraLight.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-ExtraLightItalic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-Italic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-Medium.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-MediumItalic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-Light.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-LightItalic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-Regular.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-SemiBold.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-SemiBoldItalic.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-Thin.otf',
            'node_modules/@tamagui/font-inter/otf/Inter-ThinItalic.otf',
          ],
        },
      ],
    ],
    owner: 'rifandani',
    name: process.env.EXPO_PUBLIC_APP_TITLE!,
    slug: 'expo-app',
    scheme: 'expo-app',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'automatic',
    platforms: ['android', 'ios'],
    assetBundlePatterns: ['**/*'],
    icon: './src/assets/icon.png',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#000',
    },
    android: {
      package: bundleId,
      // versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#000',
      },
    },
    ios: {
      bundleIdentifier: bundleId,
      // buildNumber: 1,
      splash: {
        image: './src/assets/splash.png',
        tabletImage: './src/assets/splash-tablet.png',
        resizeMode: 'cover',
        backgroundColor: '#000',
      },
    },
    extra: {
      eas: {
        projectId: '975abfb8-c490-47ad-ab6d-7b7c8c1a063d',
      },
    },
  };
};
