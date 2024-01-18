import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

import { BaseButton } from '#shared/components/button/base-button';
import { HeaderBackButtonProps } from '#shared/types/navigation';

export function HeaderLeft({ canGoBack }: HeaderBackButtonProps) {
  const router = useRouter();

  const onPressBack = () => {
    if (canGoBack) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <BaseButton
      transparent
      circular
      size="$3"
      mr="$3"
      icon={<Feather name="chevron-left" size={20} />}
      onPress={onPressBack}
    />
  );
}
