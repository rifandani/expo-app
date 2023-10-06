import { Stack } from 'expo-router';
import { H1, Paragraph, YStack } from 'tamagui';

import { useCheckAuth } from '#auth/hooks/useCheckAuth/useCheckAuth.hook';
import { HeaderRight } from '#home/components/header/HeaderRight';
import { BaseSpinner } from '#shared/components/spinner/BaseSpinner';

export function HomePage() {
  const [authed] = useCheckAuth();

  if (!authed)
    return (
      <YStack f={1} jc="center" ai="center" gap="$5">
        <BaseSpinner size="large" preset="primary" />
        <Paragraph>Checking your authentication...</Paragraph>
      </YStack>
    );

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />

      <YStack f={1}>
        <H1>Home Page</H1>
      </YStack>
    </>
  );
}
