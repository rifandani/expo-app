import Feather from '@expo/vector-icons/Feather';
import { Adapt, Button, Input, Label, Popover, PopoverProps, XStack, YStack } from 'tamagui';

/**
 * Support for native was contributed by a community member, but not guaranteed to work until we get time to fully test.
 * We don't recommend the Popover pattern for phone-sized devices, and you can adapt it to a Sheet instead.
 */
export function PopoverDemo() {
  return (
    <XStack space="$2" flex={1} justifyContent="center" alignItems="center">
      <Demo placement="left" Icon={<Feather name="chevron-left" />} Name="left-popover" />
      <Demo placement="bottom" Icon={<Feather name="chevron-down" />} Name="bottom-popover" />
      <Demo placement="top" Icon={<Feather name="chevron-up" />} Name="top-popover" />
      <Demo placement="right" Icon={<Feather name="chevron-right" />} Name="right-popover" />
    </XStack>
  );
}

export function Demo({ Icon, Name, ...props }: PopoverProps & { Icon?: any; Name?: string }) {
  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button icon={Icon} />
      </Popover.Trigger>

      <Adapt when="sm" platform="touch">
        <Popover.Sheet modal dismissOnSnapToBottom>
          <Popover.Sheet.Frame padding="$4">
            <Adapt.Contents />
          </Popover.Sheet.Frame>

          <Popover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Popover.Sheet>
      </Adapt>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}>
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <YStack space="$3">
          <XStack space="$3">
            <Label size="$3" htmlFor={Name}>
              Name
            </Label>

            <Input size="$3" id={Name} />
          </XStack>

          <Popover.Close asChild>
            <Button
              size="$3"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}>
              Submit
            </Button>
          </Popover.Close>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}
