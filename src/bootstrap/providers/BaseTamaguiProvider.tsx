import { useColorScheme } from 'react-native';
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui';

import config from '../../../tamagui.config';

import { useAppStore } from '#shared/hooks/useAppStore.hook';

/**
 * Tamagui provider where we apply the `tamagui.config`.
 */
export function BaseTamaguiProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme();
  const { theme } = useAppStore();

  return (
    <TamaguiProvider
      disableInjectCSS
      config={config}
      defaultTheme={theme === 'system' ? (scheme as string) : theme}
      {...rest}>
      {children}
    </TamaguiProvider>
  );
}
