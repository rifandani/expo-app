import { useFocusEffect, usePathname, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';

import { useAppStore } from '#shared/hooks/use-app-store';

/**
 * Side effect to check user authentication, wether they're logged in or not
 *
 * @example
 *
 * ```tsx
 * const [hasAuth] = useCheckAuth()
 * ```
 */
export function useCheckAuth() {
  const { push } = useRouter();
  const pathname = usePathname();
  const user = useAppStore((state) => state.user);
  const resetUser = useAppStore((state) => state.resetUser);
  const [appReady, setAppReady] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const isLoginRoute = pathname === '/login';

      if (!user && !isLoginRoute) {
        push('/login');
        return;
      }

      if (user && isLoginRoute) {
        // push('/home');
        resetUser();
        return;
      }

      setAppReady(true);
    }, [pathname, push, resetUser, user])
  );

  return [appReady];
}
