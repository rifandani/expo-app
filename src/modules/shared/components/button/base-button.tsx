import { Button, styled } from 'tamagui';

/**
 * includes `bg`, `color`, `pressStyle.bg`, `pressStyle.borderColor`
 */
const baseButtonVariants = {
  preset: {
    default: {}, // unstyled
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '$borderColor',

      hoverStyle: {
        backgroundColor: 'transparent',
        borderColor: '$borderColorHover',
      },

      pressStyle: {
        backgroundColor: 'transparent',
        borderColor: '$borderColorPress',
      },

      focusStyle: {
        backgroundColor: 'transparent',
        borderColor: '$borderColorFocus',
      },
    },
    primary: {
      bg: '$purple5',
      color: '$purple11',

      pressStyle: {
        bg: '$purple6',
        borderColor: '$borderColorPress',
      },
    },
    secondary: {
      bg: '$pink5',
      color: '$pink11',

      pressStyle: {
        bg: '$pink6',
        borderColor: '$borderColorPress',
      },
    },
    success: {
      bg: '$green5',
      color: '$green11',

      pressStyle: {
        bg: '$green6',
        borderColor: '$borderColorPress',
      },
    },
    error: {
      bg: '$red5',
      color: '$red11',

      pressStyle: {
        bg: '$red6',
        borderColor: '$borderColorPress',
      },
    },
    warning: {
      bg: '$yellow5',
      color: '$yellow11',

      pressStyle: {
        bg: '$yellow6',
        borderColor: '$borderColorPress',
      },
    },
    info: {
      bg: '$blue5',
      color: '$blue11',

      pressStyle: {
        bg: '$blue6',
        borderColor: '$borderColorPress',
      },
    },
  },
  disabled: {
    true: {
      pointerEvents: 'none',
      bg: '$background',
      bc: '$borderColor',
      color: '$color',
    },
  },
} as const;

export const BaseButton = styled(Button, {
  name: 'BaseButton',
  variants: baseButtonVariants,
  defaultVariants: {
    preset: 'default',
  },
});
