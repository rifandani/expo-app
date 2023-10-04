import { Paragraph, SizableText, XStack, YStack } from 'tamagui';

/**
 * Note: Paragraph renders to a p tag on web, which can cause issues when you nest them during SSR.
 * If you don't mind rendering to a span, use SizableText, otherwise, be careful when nesting items inside a Paragraph.
 */
export function TextDemo() {
  return (
    <YStack space="$2" alignItems="center">
      <SizableText size="$3">SizableText</SizableText>

      <XStack space>
        <SizableText theme="alt1" size="$3">
          alt1
        </SizableText>

        <SizableText theme="alt2" size="$3">
          alt2
        </SizableText>
      </XStack>

      <Paragraph size="$2" fontWeight="800">
        Paragraph
      </Paragraph>
    </YStack>
  );
}
