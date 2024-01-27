import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { H2, Paragraph, styled } from 'tamagui';

import { LoginForm } from '#auth/components/login-form';
import { useI18nContext } from '#i18n/i18n-react';
import { WrapTranslation } from '#shared/components/i18n/wrap-translation';

const SAV = styled(SafeAreaView, {
  name: 'SAV',
  f: 1,
  px: '$5',
  jc: 'center',
});

export default function LoginScreen() {
  const { LL } = useI18nContext();

  return (
    <SAV>
      <H2 ta="center">{LL.auth.welcome()}</H2>

      <LoginForm />

      <Paragraph ta="center" mt="$2">
        <WrapTranslation message={LL.auth.registerHere()}>
          {(infix) => <Link href="/register"> {infix}</Link>}
        </WrapTranslation>
      </Paragraph>
    </SAV>
  );
}
