import { Stack } from 'expo-router';
import { H1, YStack } from 'tamagui';

import { HeaderRight } from '#home/components/header/header-right';
import { useI18nContext } from '#i18n/i18n-react';
import { BaseErrorBoundary } from '#shared/components/base-error-boundary';
import { CheckAuthWrapper } from '#shared/components/check-auth-wrapper';

export const ErrorBoundary = BaseErrorBoundary;

export default function HomeScreen() {
  const { LL } = useI18nContext();

  return (
    <CheckAuthWrapper>
      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />

      <YStack f={1} p="$3">
        <H1>{LL.home.title()}</H1>
      </YStack>
    </CheckAuthWrapper>
  );
}
