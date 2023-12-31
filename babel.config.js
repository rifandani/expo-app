/* eslint-env node */

/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // '@babel/plugin-proposal-export-namespace-from' is now already included in babel-preset-expo in Expo SDK 49
      // 'transform-inline-environment-variables' process env is now already supported in Expo SDK 49

      // NOTE: this is optional, you don't *need* the compiler
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
      'expo-router/babel',
    ],
  };
};
