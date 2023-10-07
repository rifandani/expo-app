import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, Paragraph, styled } from 'tamagui';

import { LoginForm } from '#auth/components/login-form/LoginForm';

const LoginSAV = styled(SafeAreaView, {
  name: 'LoginSAV',
  f: 1,
  p: '$5',
  jc: 'center',
  bg: 'white',
});

export function LoginPage() {
  return (
    <LoginSAV>
      <Stack.Screen
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />

      <H2 ta="center" col="$purple10">
        Welcome Back
      </H2>

      <LoginForm />

      <Paragraph ta="center" mt="$2">
        Don't have an account?
        <Link href="/register"> Register here</Link>
      </Paragraph>
    </LoginSAV>
  );
}
