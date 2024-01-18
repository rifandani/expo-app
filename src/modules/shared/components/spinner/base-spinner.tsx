import { Spinner, styled } from 'tamagui';

import { presetVariantColor } from '#shared/constants/theme';

export const BaseSpinner = styled(Spinner, {
  name: 'BaseSpinner',
  variants: presetVariantColor,
  defaultVariants: {
    preset: 'default',
  },
});
