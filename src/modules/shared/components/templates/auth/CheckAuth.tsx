import { PropsWithChildren } from 'react';
import { Paragraph, YStack } from 'tamagui';

import { useCheckAuth } from '#auth/hooks/useCheckAuth/useCheckAuth.hook';
import { BaseSpinner } from '#shared/components/spinner/BaseSpinner';

export function CheckAuth({ children }: PropsWithChildren) {
  const [authed] = useCheckAuth();

  if (!authed)
    return (
      <YStack f={1} jc="center" ai="center" gap="$5">
        <BaseSpinner size="large" preset="primary" />
        <Paragraph>Checking your authentication...</Paragraph>
      </YStack>
    );

  return children;
}
