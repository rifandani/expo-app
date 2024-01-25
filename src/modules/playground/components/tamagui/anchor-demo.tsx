import { Anchor, YStack } from 'tamagui';

/**
 * The Anchor component provides a way to link to external websites.
 * It extends SizableText, adding the href, target, and rel attributes.
 * On native, it will use React Native Linking.openURL
 */
export function AnchorDemo() {
  return (
    <YStack space="$2" alignItems="center">
      <Anchor size="$3" href="geo:37.484847,-122.148386">
        Geo Anchor
      </Anchor>
    </YStack>
  );
}
