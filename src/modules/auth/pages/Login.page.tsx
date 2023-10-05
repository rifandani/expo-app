import Feather from '@expo/vector-icons/Feather';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, YStack } from 'tamagui';

import { BaseButton } from '#shared/components/button/BaseButton';

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

      <YStack f={1} p="$5">
        <H2 ta="center">Welcome Back</H2>

        <BaseButton preset="primary" onPress={onPress}>
          <BaseButton.Icon>
            <Feather name="log-in" />
          </BaseButton.Icon>
          <BaseButton.Text>Login</BaseButton.Text>
        </BaseButton>
      </YStack>
    </SafeAreaView>
  );
}
