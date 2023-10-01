import { config } from './bootstrap/configs/tamagui.config';

declare module '*.png' {
  const value: any;
  export = value;
}

type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

// declare module '*.svg' {
//   import React from 'react';
//   import { SvgProps } from 'react-native-svg';
//   const content: React.FC<SvgProps>;
//   export default content;
// }
