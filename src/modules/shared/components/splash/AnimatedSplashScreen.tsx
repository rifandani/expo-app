import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { SplashVideo } from './SplashVideo';

/**
 * wrapper for the imperative animated splash screen video playback
 */
export function AnimatedSplashScreen({ children }: PropsWithChildren) {
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashVideoComplete, setSplashVideoComplete] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  const opacity = useMemo(() => new Animated.Value(1), []);

  // #region HANDLERS
  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } finally {
      setAppReady(true);
    }
  }, []);

  const onVideoPlaybackFinish = useCallback(async () => {
    setSplashVideoComplete(true);
  }, []);
  // #endregion

  useEffect(() => {
    if (isAppReady && isSplashVideoComplete) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAppReady, isSplashVideoComplete]);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}

      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              opacity,
              backgroundColor: Constants.expoConfig?.splash?.backgroundColor,
            },
          ]}>
          <SplashVideo onLoaded={onImageLoaded} onFinish={onVideoPlaybackFinish} />
        </Animated.View>
      )}
    </View>
  );
}
