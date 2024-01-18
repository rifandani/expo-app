import { useColorScheme } from 'react-native';
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui';

import config from '../../../../tamagui.config';

import { useAppStore } from '#shared/hooks/use-app-store';

/**
 * Tamagui provider where we apply the `tamagui.config`.
 */
export function AppTamaguiProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme();
  const theme = useAppStore((state) => state.theme);

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
