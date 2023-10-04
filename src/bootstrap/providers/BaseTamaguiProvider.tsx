import { useColorScheme } from 'react-native';
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui';

import config from '../../../tamagui.config';

/**
 * Tamagui provider where we apply the `tamagui.config`.
 */
export function BaseTamaguiProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme();

  return (
    <TamaguiProvider
      disableInjectCSS
      config={config}
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      {...rest}>
      {children}
    </TamaguiProvider>
  );
}
