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
