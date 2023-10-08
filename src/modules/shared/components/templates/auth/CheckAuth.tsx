import { PropsWithChildren } from 'react';
import { Paragraph, YStack } from 'tamagui';

import { useCheckAuth } from '#auth/hooks/useCheckAuth/useCheckAuth.hook';
import { useI18nContext } from '#i18n/i18n-react';
import { BaseSpinner } from '#shared/components/spinner/BaseSpinner';

export function CheckAuth({ children }: PropsWithChildren) {
  const [authed] = useCheckAuth();
  const { LL } = useI18nContext();

  if (!authed)
    return (
      <YStack f={1} jc="center" ai="center" gap="$5">
        <BaseSpinner size="large" preset="primary" />
        <Paragraph>{LL.auth.checkingAuth()}</Paragraph>
      </YStack>
    );

  return children;
}
