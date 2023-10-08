import { useToastController } from '@tamagui/toast';
import { useFocusEffect, usePathname, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import { useAppStore } from '#shared/hooks/useAppStore.hook';

/**
 * Side effect to check user authentication, wether they're logged in or not
 *
 * @example
 *
 * ```tsx
 * useCheckAuth()
 * ```
 */
export function useCheckAuth() {
  // const [t] = useI18n();
  const { push } = useRouter();
  const pathname = usePathname();
  const { user } = useAppStore();
  const toast = useToastController();
  const [appReady, setAppReady] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const isLoginRoute = pathname === '/login';

      if (!user && !isLoginRoute) {
        push('/login');
        toast.show('Unauthorized'); // t('unauthorized')
        return;
      }

      if (user && isLoginRoute) {
        push('/');
        toast.show('Authorized'); // t('authorized')
        return;
      }

      setAppReady(true);
    }, [pathname, push, toast, user])
  );

  return [appReady];
}
