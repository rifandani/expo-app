import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ListItem, Separator, YGroup, getTokenValue } from 'tamagui';

import { BaseButton } from '#shared/components/button/base-button';
import { BaseSheet } from '#shared/components/sheet/base-sheet';
import { BaseSheetState } from '#shared/components/sheet/types';
import { useAppStore } from '#shared/hooks/use-app-store';
import { HeaderButtonProps } from '#shared/types/navigation';

export function HeaderRight(_: HeaderButtonProps) {
  const router = useRouter();
  const resetUser = useAppStore((state) => state.resetUser);
  const [state, setState] = useState<BaseSheetState>({ open: false, position: 0 });

  const onPressMore = () => {
    setState({ ...state, open: true });
  };
  const onPressLinkToProfile = () => {
    setState({ ...state, open: false });
    router.push('/profile');
  };
  const onPressLogout = () => {
    setState({ ...state, open: false });
    resetUser();
    router.push('/login');
  };

  return (
    <>
      <BaseButton
        transparent
        circular
        size="$3"
        icon={<Feather name="more-vertical" size={20} />}
        onPress={onPressMore}
      />

      <BaseSheet
        state={state}
        setState={setState}
        sheetProps={{ snapPointsMode: 'fit', snapPoints: undefined }}
        frameProps={{ p: '$5' }}>
        <YGroup als="center" bordered separator={<Separator />}>
          <YGroup.Item>
            <ListItem
              pressTheme
              title="Profile"
              icon={<Feather name="user" size={20} />}
              iconAfter={<Feather name="chevron-right" size={20} />}
              onPress={onPressLinkToProfile}
            />
          </YGroup.Item>

          <YGroup.Item>
            <ListItem
              pressStyle={{ bg: '$red5' }}
              icon={<Feather name="log-out" size={20} color={getTokenValue('$red10Dark')} />}
              onPress={onPressLogout}>
              <ListItem.Text color="$red10Dark">Logout</ListItem.Text>
            </ListItem>
          </YGroup.Item>
        </YGroup>
      </BaseSheet>
    </>
  );
}
