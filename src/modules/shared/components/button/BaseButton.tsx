import { Button, styled } from 'tamagui';

import { buttonVariants } from '#shared/constants/theme.constant';

export const BaseButton = styled(Button, {
  name: 'BaseButton',
  variants: buttonVariants,
  defaultVariants: {
    preset: 'default',
  },
});
