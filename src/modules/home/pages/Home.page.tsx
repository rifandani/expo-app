import FeatherIcon from '@expo/vector-icons/Feather';
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

        <Button bc="$blue1" color="$blue10">
          <Button.Icon>
            <FeatherIcon name="airplay" />
          </Button.Icon>
          <Button.Text>Button with icon</Button.Text>
          <Button.Icon>
            <FeatherIcon name="activity" />
          </Button.Icon>
        </Button>
      </YStack>
    </>
  );
}
