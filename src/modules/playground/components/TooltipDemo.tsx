import Feather from '@expo/vector-icons/Feather';
import { Button, Paragraph, Tooltip, TooltipGroup, TooltipProps, XStack, YStack } from 'tamagui';

export function TooltipDemo() {
  return (
    <TooltipGroup delay={{ open: 3000, close: 100 }}>
      <YStack space="$2" alignSelf="center">
        <XStack space="$2">
          <Demo groupId="0" placement="top-end" Icon={<Feather name="circle" />} />
          <Demo groupId="1" placement="top" Icon={<Feather name="chevron-up" />} />
          <Demo groupId="2" placement="top-start" Icon={<Feather name="circle" />} />
        </XStack>

        <XStack space="$2">
          <Demo groupId="3" placement="left" Icon={<Feather name="chevron-left" />} />
          <YStack flex={1} />
          <Demo groupId="4" placement="right" Icon={<Feather name="chevron-right" />} />
        </XStack>

        <XStack space="$2">
          <Demo groupId="5" placement="bottom-end" Icon={<Feather name="circle" />} />
          <Demo groupId="6" placement="bottom" Icon={<Feather name="chevron-down" />} />
          <Demo groupId="7" placement="bottom-start" Icon={<Feather name="circle" />} />
        </XStack>
      </YStack>
    </TooltipGroup>
  );
}

function Demo({ Icon, ...props }: TooltipProps & { Icon?: any }) {
  return (
    <Tooltip {...props}>
      <Tooltip.Trigger>
        <Button icon={Icon} circular />
      </Tooltip.Trigger>

      <Tooltip.Content
        enterStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        scale={1}
        x={0}
        y={0}
        opacity={1}
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}>
        <Tooltip.Arrow />

        <Paragraph size="$2" lineHeight="$1">
          Hello world
        </Paragraph>
      </Tooltip.Content>
    </Tooltip>
  );
}
