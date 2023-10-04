import { useToastController } from '@tamagui/toast';
import { useFocusEffect, usePathname, useRouter } from 'expo-router';
import { useCallback } from 'react';

import { useUserStore } from '#auth/hooks/useUserStore/useUserStore.hook';

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
  const { user } = useUserStore();
  const toast = useToastController();

  useFocusEffect(
    useCallback(() => {
      const isLoginRoute = pathname === '/login';

      if (!user && isLoginRoute) return;

      if (!user) {
        push('/login');
        toast.show('Unauthorized'); // t('unauthorized')
        return;
      }

      if (isLoginRoute) {
        push('/');
        toast.show('Authorized'); // t('authorized')
      }
    }, [pathname, push, toast, user])
  );
}
