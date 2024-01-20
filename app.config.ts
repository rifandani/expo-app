import { type ConfigContext, type ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  console.log(`🦓 ~ "app.config.ts" at line 3: config -> `, config);
  console.log(`🦓 ~ "app.config.ts" at line 4: config -> `, process.env);

  return {
    ...config,
    experiments: {
      typedRoutes: true,
    },
    plugins: [
      'expo-router',
      'expo-localization',
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
    name: 'Expo App',
    slug: 'expo-app',
    scheme: 'expo-app',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'automatic',
    assetBundlePatterns: ['**/*'],
    icon: './src/assets/icon.png',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#000',
    },
    android: {
      package: 'com.rifandani.expoapp',
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#000',
      },
    },
    ios: {
      bundleIdentifier: 'com.rifandani.expoapp',
      splash: {
        image: './src/assets/splash.png',
        tabletImage: './src/assets/splash-tablet.png',
        resizeMode: 'cover',
        backgroundColor: '#000',
      },
    },
    web: {
      bundler: 'metro',
      favicon: './src/assets/favicon.png',
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '975abfb8-c490-47ad-ab6d-7b7c8c1a063d',
      },
    },
  };
};
