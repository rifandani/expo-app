import { NativeToast } from './NativeToast';

import { IS_EXPO } from '#shared/constants/global.constant';

export function BaseToast() {
  if (IS_EXPO) return null;

  return <NativeToast />;
}
