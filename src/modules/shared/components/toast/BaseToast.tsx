import { Toast, useToastState } from '@tamagui/toast';
import { ThemeName } from 'tamagui';

export type ToastCustomData = {
  preset: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
};

const themeMapper: Record<ToastCustomData['preset'], ThemeName> = {
  default: 'Card',
  primary: 'purple_Card',
  secondary: 'pink_Card',
  success: 'green_Card',
  error: 'red_Card',
  warning: 'yellow_Card',
  info: 'blue_Card',
};

export function BaseToast() {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) {
    return null;
  }

  const customData = currentToast.customData as ToastCustomData;

  return (
    <Toast
      theme={themeMapper[customData?.preset ?? 'default']}
      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      enterStyle={{ opacity: 0, scale: 0.25, y: 25 }}
      exitStyle={{ opacity: 0, scale: 0.5, y: 25 }}
      opacity={1}
      scale={1}
      y={-15}
      animation="bouncy">
      <Toast.Title>{currentToast.title}</Toast.Title>
      {!!currentToast.message && <Toast.Description>{currentToast.message}</Toast.Description>}
    </Toast>
  );
}
