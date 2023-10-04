import Feather from '@expo/vector-icons/Feather';
import { ErrorBoundaryProps } from 'expo-router';
import { Button, H1, YStack } from 'tamagui';

import { LoginPage } from '#auth/pages/Login.page';

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <YStack bg="$red1" gap="$-1">
      <H1>Error: {props.error.message}</H1>
      <Button bg="$red2Light" color="$red2Dark" onPress={props.retry}>
        <Button.Icon>
          <Feather name="repeat" />
        </Button.Icon>
        <Button.Text>Try Again</Button.Text>
      </Button>
    </YStack>
  );
}

export default LoginPage;
