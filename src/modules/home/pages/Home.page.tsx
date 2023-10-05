import Feather from '@expo/vector-icons/Feather';
import { Stack } from 'expo-router';
import { Button, H1, Paragraph, YStack } from 'tamagui';

import { useCheckAuth } from '#auth/hooks/useCheckAuth/useCheckAuth.hook';
import { useUserStore } from '#auth/hooks/useUserStore/useUserStore.hook';
import { envSchema } from '#shared/api/env.schema';
import { BaseSpinner } from '#shared/components/spinner/BaseSpinner';

export function HomePage() {
  const [authed] = useCheckAuth();
  const { clearUser } = useUserStore();
  const env = envSchema.parse(process.env);

  const onClickLogout = () => {
    clearUser();
  };

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
        }}
      />

      <YStack f={1}>
        <H1>Home Page</H1>
        <Paragraph>PUBLIC ENV: {JSON.stringify(env, null, 2)}</Paragraph>

        <Button bc="$blue1" color="$blue10" onPress={onClickLogout}>
          <Button.Icon>
            <Feather name="log-out" />
          </Button.Icon>
          <Button.Text>Logout</Button.Text>
        </Button>
      </YStack>
    </>
  );
}
