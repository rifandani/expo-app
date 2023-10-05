import { Link, Stack } from 'expo-router';
import { Button, H1, YStack } from 'tamagui';

export default function Unmatched() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <YStack f={1} ai="center" jc="center" p={5}>
        <H1 className="text-2xl font-bold">This screen doesn't exist.</H1>

        <Link href="/" replace asChild>
          <Button>Go to home screen!</Button>
        </Link>
      </YStack>
    </>
  );
}
