import { styled, YStack } from 'tamagui';

export const BaseYStack = styled(YStack, {
  name: 'BaseYStack',
  backgroundColor: 'red',

  variants: {
    blue: {
      true: {
        backgroundColor: 'blue',
      },
    },
  } as const,
});
