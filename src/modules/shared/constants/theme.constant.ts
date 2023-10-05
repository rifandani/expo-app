/**
 * includes `color`
 */
export const presetVariantColor = {
  preset: {
    default: {},
    primary: {
      color: '$purple10',
    },
    secondary: {
      color: '$pink10',
    },
    success: {
      color: '$green10',
    },
    error: {
      color: '$red10',
    },
    warning: {
      color: '$yellow10',
    },
    info: {
      color: '$blue10',
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
export const presetVariantButton = {
  preset: {
    default: {},
    primary: {
      bg: '$purple5',
      color: '$purple10',

      pressStyle: {
        bg: '$purple6',
        borderColor: '$borderColorPress',
      },
    },
    secondary: {
      bg: '$pink5',
      color: '$pink10',

      pressStyle: {
        bg: '$pink6',
        borderColor: '$borderColorPress',
      },
    },
    success: {
      bg: '$green5',
      color: '$green10',

      pressStyle: {
        bg: '$green6',
        borderColor: '$borderColorPress',
      },
    },
    error: {
      bg: '$red5',
      color: '$red10',

      pressStyle: {
        bg: '$red6',
        borderColor: '$borderColorPress',
      },
    },
    warning: {
      bg: '$yellow5',
      color: '$yellow10',

      pressStyle: {
        bg: '$yellow6',
        borderColor: '$borderColorPress',
      },
    },
    info: {
      bg: '$blue5',
      color: '$blue10',

      pressStyle: {
        bg: '$blue6',
        borderColor: '$borderColorPress',
      },
    },
  },
} as const;
