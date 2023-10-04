import { Text, Unspaced, YStack } from 'tamagui';

/**
 * When using space, you sometimes want certain children to not contribute to spacing.
 */
export function UnspacedDemo() {
  return (
    <YStack position="relative" space>
      <Text>Some text</Text>

      {/* avoids extra space at end: */}
      <Unspaced>
        <Text position="absolute">Some absolute positioned text</Text>
      </Unspaced>
    </YStack>
  );
}
