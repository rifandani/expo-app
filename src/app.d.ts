// /// <reference types="nativewind/types" />

// declare module 'valtio' {
//   function useSnapshot<T extends object>(p: T): T;
// }

// declare module '*.svg' {
//   import React from 'react';
//   import { SvgProps } from 'react-native-svg';
//   const content: React.FC<SvgProps>;
//   export default content;
// }

declare module '*.png' {
  const value: any;
  export = value;
}