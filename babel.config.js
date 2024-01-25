/* eslint-env node */

// run `dev:clean` everytime babel config changes, to clear bundler cache
/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // '@babel/plugin-proposal-export-namespace-from' is now already included in babel-preset-expo in Expo SDK 49
      // 'transform-inline-environment-variables' process env is now already supported in Expo SDK 49

      'react-native-reanimated/plugin',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          logTimings: true,
        },
      ],
    ],
  };
};
