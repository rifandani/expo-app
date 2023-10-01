import { Stack } from 'expo-router';
import { Button, Text, YStack } from 'tamagui';

export function HomePage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />

      <YStack bg="$background">
        <Text>Hello Universe!</Text>

        <Button>Button</Button>
      </YStack>
    </>
  );
}
