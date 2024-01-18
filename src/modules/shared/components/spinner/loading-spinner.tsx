import { YStack } from 'tamagui';

import { BaseSpinner } from '#shared/components/spinner/base-spinner';

export function LoadingSpinner() {
  return (
    <YStack f={1} jc="center" ai="center">
      <BaseSpinner size="large" preset="primary" />
    </YStack>
  );
}
