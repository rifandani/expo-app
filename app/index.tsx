import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';

import { AnimatedSplashScreen } from '#shared/components/splash/AnimatedSplashScreen';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Universe!</Text>
    </View>
  );
}

export default function App() {
  return (
    <AnimatedSplashScreen>
      <MainScreen />
    </AnimatedSplashScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 30,
    marginBottom: 15,
    fontWeight: 'bold',
  },
});
