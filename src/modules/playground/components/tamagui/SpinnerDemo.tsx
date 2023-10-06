import { Spinner, YStack } from 'tamagui';

/**
 * Note that due to the fact that Spinner is an extension of React Native ActivityIndicator,
 * and that only accepts size small or large, we are currently limited to just these sizes.
 */
export function SpinnerDemo() {
  return (
    <YStack padding="$3" space="$4" alignItems="center">
      <Spinner size="small" color="$green10" />

      <Spinner size="large" color="$orange10" />
    </YStack>
  );
}
