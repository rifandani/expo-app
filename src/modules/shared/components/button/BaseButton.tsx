import { Button, styled } from 'tamagui';

import { presetVariantButton } from '#shared/constants/theme.constant';

export const BaseButton = styled(Button, {
  name: 'BaseButton',
  variants: presetVariantButton,
  defaultVariants: {
    preset: 'default',
  },
});
