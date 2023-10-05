import Feather from '@expo/vector-icons/Feather';
import { useToastController } from '@tamagui/toast';
import { Stack, useRouter } from 'expo-router';
import { Button, H1, Paragraph, YStack } from 'tamagui';

import { useCheckAuth } from '#auth/hooks/useCheckAuth/useCheckAuth.hook';
import { envSchema } from '#shared/api/env.schema';

export function HomePage() {
  useCheckAuth();
  const env = envSchema.parse(process.env);
  const { push } = useRouter();
  const toast = useToastController();

  const onClickLogin = () => {
    push('/login');
    toast.show('Login success');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />

      <YStack f={1}>
        <H1>Home Page</H1>
        <Paragraph>ENV: {JSON.stringify(env, null, 2)}</Paragraph>

        <Button bc="$blue1" color="$blue10" onPress={onClickLogin}>
          <Button.Icon>
            <Feather name="log-in" />
          </Button.Icon>
          <Button.Text>Login</Button.Text>
        </Button>
      </YStack>
    </>
  );
}
