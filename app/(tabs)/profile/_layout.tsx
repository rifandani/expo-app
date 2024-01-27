import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'tamagui';

import { CheckAuthWrapper } from '#shared/components/check-auth-wrapper';

const SAV = styled(SafeAreaView, {
  name: 'SAV',
  f: 1,
});

export default function ProfileLayout() {
  return (
    <SAV>
      <CheckAuthWrapper>
        <Slot />
      </CheckAuthWrapper>
    </SAV>
  );
}
