import { capitalize } from '@rifandani/nxact-yutiriti';
import type { FormattersInitializer } from 'typesafe-i18n';
import {
  date,
  identity,
  ignore,
  lowercase,
  number,
  replace,
  time,
  uppercase,
} from 'typesafe-i18n/formatters';

import type { Formatters, Locales } from './i18n-types';

export const initFormatters: FormattersInitializer<Locales, Formatters> = (locale: Locales) => {
  const formatters: Formatters = {
    // add your formatter functions here
    ignore, // Ignores the variable and returns an empty string
    identity, // Returns the variable without modifications
    lowercase,
    uppercase,
    capitalize: (value: string) => capitalize(value),
    weekday: date(locale, { weekday: 'long' }),
    timeShort: time('id', { timeStyle: 'short' }),
    currency: number('id', { style: 'currency', currency: 'IDR' }),
    noSpaces: replace(/\s/g, '-'),
  };

  return formatters;
};
