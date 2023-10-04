import { H1, Text, VisuallyHidden, YStack } from 'tamagui';

export function VisuallyHiddenDemo() {
  return (
    <YStack space>
      <H1>Title</H1>

      <VisuallyHidden>
        <Text>Add annotations here</Text>
      </VisuallyHidden>
    </YStack>
  );
}
