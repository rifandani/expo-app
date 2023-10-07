import { Stack } from 'expo-router';
import { H1, YStack } from 'tamagui';

import { HeaderRight } from '#home/components/header/HeaderRight';
import { CheckAuth } from '#shared/components/templates/auth/CheckAuth';

export function HomePage() {
  return (
    <CheckAuth>
      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      />

      <YStack f={1} bg="white">
        <H1>Home Page</H1>
      </YStack>
    </CheckAuth>
  );
}
