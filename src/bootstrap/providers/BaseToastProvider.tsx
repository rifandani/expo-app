import { ToastProvider, ToastProviderProps } from '@tamagui/toast';

import { BaseToast } from '#shared/components/toast/BaseToast';
import { BaseToastViewport } from '#shared/components/toast/SafeToastViewport';

const SWIPE_DIRECTION = 'horizontal';
const DURATION = 3_000; // 3s

/**
 * Tamagui toast provider.
 * `BaseToast` and `SafeToastViewport` included.
 */
export function BaseToastProvider({ children, ...rest }: ToastProviderProps) {
  return (
    <ToastProvider
      swipeDirection={SWIPE_DIRECTION}
      duration={DURATION}
      burntOptions={{ from: 'bottom' }} // only on iOS
      native={
        [
          /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
          // 'mobile'
        ]
      }
      {...rest}>
      {children}

      <BaseToast />
      <BaseToastViewport />
    </ToastProvider>
  );
}
