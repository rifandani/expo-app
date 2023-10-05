import { YStack } from 'tamagui';

import { BaseSpinner } from './BaseSpinner';

export function LoadingSpinner() {
  return (
    <YStack f={1} jc="center" ai="center">
      <BaseSpinner size="large" preset="primary" />
    </YStack>
  );
}
