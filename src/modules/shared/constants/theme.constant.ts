/**
 * includes `color`
 */
export const presetVariantColor = {
  preset: {
    default: {},
    primary: {
      color: '$purple11',
    },
    secondary: {
      color: '$pink11',
    },
    success: {
      color: '$green11',
    },
    error: {
      color: '$red11',
    },
    warning: {
      color: '$yellow11',
    },
    info: {
      color: '$blue11',
    },
  },
} as const;

/**
 * includes `bg`
 */
export const presetVariantBg = {
  preset: {
    default: {},
    primary: {
      bg: '$purple5',
    },
    secondary: {
      bg: '$pink5',
    },
    success: {
      bg: '$green5',
    },
    error: {
      bg: '$red5',
    },
    warning: {
      bg: '$yellow5',
    },
    info: {
      bg: '$blue5',
    },
  },
} as const;

/**
 * includes `bg`, `color`, `pressStyle.bg`, `pressStyle.borderColor`
 */
export const buttonVariants = {
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
