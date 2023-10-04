import Feather from '@expo/vector-icons/Feather';
import { Stack } from 'expo-router';
import { Button, H1, YStack } from 'tamagui';

export function LoginPage() {
  const onPress = () => {
    throw Error('loginn');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
        }}
      />

      <YStack bg="$background">
        <H1>Login Page</H1>

        <Button bc="$blue1" color="$blue10" onPress={onPress}>
          <Button.Icon>
            <Feather name="log-in" />
          </Button.Icon>
          <Button.Text>Login</Button.Text>
        </Button>
      </YStack>
    </>
  );
}
