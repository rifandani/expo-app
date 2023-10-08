import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, Paragraph, styled } from 'tamagui';

import { LoginForm } from '#auth/components/login-form/LoginForm';
import { useI18nContext } from '#i18n/i18n-react';
import { WrapTranslation } from '#shared/components/i18n/WrapTranslation';

const LoginSAV = styled(SafeAreaView, {
  name: 'LoginSAV',
  f: 1,
  p: '$5',
  jc: 'center',
  bg: 'white',
});

export function LoginPage() {
  const { LL } = useI18nContext();

  return (
    <LoginSAV>
      <Stack.Screen
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />

      <H2 ta="center" col="$purple10">
        {LL.auth.welcome()}
      </H2>

      <LoginForm />

      <Paragraph ta="center" mt="$2">
        <WrapTranslation
          message={LL.auth.registerHere()}
          Component={(infix) => <Link href="/register"> {infix}</Link>}
        />
      </Paragraph>
    </LoginSAV>
  );
}
