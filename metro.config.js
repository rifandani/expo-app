/* eslint-env node */

// Learn more https://docs.expo.io/guides/customizing-metro
/** @type {import('expo/metro-config')} */
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: false,
});

// Expo 49 issue: default metro config needs to include "mjs"
// https://github.com/expo/expo/issues/23180
config.resolver.sourceExts.push('mjs');
// .cjs needed for typesafe-i18n
config.resolver.sourceExts.push('cjs');

module.exports = config;
