import Feather from '@expo/vector-icons/Feather';
import { ComponentPropsWithoutRef } from 'react';
import { ListItem } from 'tamagui';

export function ProfileListItem(props: ComponentPropsWithoutRef<typeof ListItem>) {
  return (
    <ListItem
      hoverTheme
      pressTheme
      transparent
      iconAfter={<Feather name="chevron-right" />}
      pressStyle={{
        br: '$5',
      }}
      {...props}
    />
  );
}
