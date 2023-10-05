import Feather from '@expo/vector-icons/Feather';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, H1, YStack } from 'tamagui';

export function LoginPage() {
  const router = useRouter();
  const onPress = () => {
    router.push('/');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />

      <YStack f={1}>
        <H1>Login Page</H1>

        <Button bc="$blue1" color="$blue10" onPress={onPress}>
          <Button.Icon>
            <Feather name="log-in" />
          </Button.Icon>
          <Button.Text>Login</Button.Text>
        </Button>
      </YStack>
    </SafeAreaView>
  );
}
