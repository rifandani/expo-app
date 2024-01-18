import { ToastViewport } from '@tamagui/toast';
import { ComponentPropsWithoutRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ComponentPropsWithoutRef<typeof ToastViewport>;

export function SafeToastViewport(props: Props) {
  const { left, bottom, right } = useSafeAreaInsets();

  return (
    <ToastViewport
      fd="column"
      bottom={bottom}
      left={left}
      right={right}
      multipleToasts
      {...props}
    />
  );
}
