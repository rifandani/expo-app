import { Link, Stack } from 'expo-router';
import { H1, YStack } from 'tamagui';

import { BaseButton } from '#shared/components/button/BaseButton';

export default function Unmatched() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <YStack f={1} ai="center" jc="center" p={5}>
        <H1 className="text-2xl font-bold">404: Not Found</H1>

        <Link href="/" replace asChild>
          <BaseButton mt="$2">Go to home screen</BaseButton>
        </Link>
      </YStack>
    </>
  );
}
