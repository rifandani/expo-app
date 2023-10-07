import { Stack } from 'expo-router';
import { H1, YStack } from 'tamagui';

import { HeaderRight } from '#home/components/header/HeaderRight';
import { useI18nContext } from '#i18n/i18n-react';
import { CheckAuth } from '#shared/components/templates/auth/CheckAuth';

export function HomePage() {
  const { LL } = useI18nContext();

  return (
    <CheckAuth>
      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />

      <YStack f={1} bg="white">
        <H1>{LL.home.title()}</H1>
      </YStack>
    </CheckAuth>
  );
}
