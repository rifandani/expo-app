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
  const { push } = useRouter();
  const pathname = usePathname();
  const user = useAppStore((state) => state.user);
  const [appReady, setAppReady] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const isLoginRoute = pathname === '/login';

      if (!user && !isLoginRoute) {
        push('/login');
        return;
      }

      if (user && isLoginRoute) {
        push('/');
        return;
      }

      setAppReady(true);
    }, [pathname, push, user])
  );

  return [appReady];
}
