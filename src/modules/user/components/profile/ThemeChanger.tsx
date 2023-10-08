import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react';
import { ListItem, Separator, YGroup } from 'tamagui';

import { useI18nContext } from '#i18n/i18n-react';
import { BaseSheet } from '#shared/components/sheet/BaseSheet';
import { BaseSheetState } from '#shared/components/sheet/types';
import { AppStoreState, useAppStore } from '#shared/hooks/useAppStore.hook';
import { ProfileListItem } from '#user/components/profile/ProfileListItem';

export function ThemeChanger() {
  const { LL } = useI18nContext();
  const { theme, setTheme } = useAppStore();
  const [state, setState] = useState<BaseSheetState>({ open: false, position: 0 });

  const onPressOpenSheet = () => {
    setState({ ...state, open: true });
  };
  const onPressChangeTheme = (newTheme: AppStoreState['theme']) => {
    setTheme(newTheme);
  };

  return (
    <>
      <ProfileListItem
        title={LL.common.theme()}
        icon={<Feather name="moon" />}
        onPress={onPressOpenSheet}
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
              title={LL.common.light()}
              icon={<Feather name="sun" size={20} />}
              iconAfter={theme === 'light' ? <Feather name="check-circle" size={20} /> : undefined}
              onPress={() => onPressChangeTheme('light')}
            />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem
              pressTheme
              title={LL.common.dark()}
              icon={<Feather name="moon" size={20} />}
              iconAfter={theme === 'dark' ? <Feather name="check-circle" size={20} r /> : undefined}
              onPress={() => onPressChangeTheme('dark')}
            />
          </YGroup.Item>
          <YGroup.Item>
            <ListItem
              pressTheme
              title={LL.common.system()}
              icon={<Feather name="tablet" size={20} />}
              iconAfter={
                theme === 'system' ? <Feather name="check-circle" size={20} r /> : undefined
              }
              onPress={() => onPressChangeTheme('system')}
            />
          </YGroup.Item>
        </YGroup>
      </BaseSheet>
    </>
  );
}
