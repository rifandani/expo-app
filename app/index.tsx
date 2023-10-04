import { ErrorBoundaryProps } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { HomePage } from '#home/pages/Home.page';

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>{props.error.message}</Text>
      <Pressable onPress={props.retry}>Try Again?</Pressable>
    </View>
  );
}

export default HomePage;
