import { ToastViewport } from '@tamagui/toast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function SafeToastViewport() {
  const { left, top, right } = useSafeAreaInsets();

  return <ToastViewport top={top + 5} left={left} right={right} />;
}
