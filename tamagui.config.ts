// import { config as configV2 } from '@tamagui/config';
import { config as configV2 } from '@tamagui/config/v2';
import { createTamagui } from 'tamagui';

// see the source code for more information of the built-in config
const config = createTamagui(configV2);

// this makes typescript properly type everything based on the config
type Conf = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
