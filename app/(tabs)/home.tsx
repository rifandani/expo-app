import { SafeAreaView } from 'react-native-safe-area-context';
import { H1, YStack, styled } from 'tamagui';

import { useI18nContext } from '#i18n/i18n-react';
import { CheckAuthWrapper } from '#shared/components/check-auth-wrapper';

const SAV = styled(SafeAreaView, {
  name: 'SAV',
  f: 1,
  jc: 'center',
});

export default function TabsHomeScreen() {
  const { LL } = useI18nContext();

  return (
    <SAV>
      <CheckAuthWrapper>
        <YStack f={1} p="$3">
          <H1>{LL.home.title()}</H1>
        </YStack>
      </CheckAuthWrapper>
    </SAV>
  );
}
