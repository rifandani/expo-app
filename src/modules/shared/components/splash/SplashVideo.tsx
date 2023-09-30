import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { useCallback, useRef, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

type SplashVideoProps = {
  onLoaded: () => void;
  onFinish: () => void;
};

/**
 * load video playback asset as splash screen
 */
export function SplashVideo({ onLoaded, onFinish }: SplashVideoProps) {
  const video = useRef<Video>(null);
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const source = isTablet
    ? require('../../../../assets/splash-tablet.mp4')
    : require('../../../../assets/splash.mp4');
  const shouldPlay = !(lastStatus.isLoaded && lastStatus.didJustFinish);

  // #region HANDLERS
  const onPlaybackStatusUpdate = useCallback(
    (status: AVPlaybackStatus) => {
      if (status.isLoaded) {
        if (lastStatus.isLoaded !== status.isLoaded) {
          onLoaded();
        }
        if (status.didJustFinish) {
          onFinish();
        }
      }

      setStatus(() => status);
    },
    [lastStatus.isLoaded, onFinish, onLoaded]
  );
  // #endregion

  return (
    <Video
      isLooping={false}
      style={StyleSheet.absoluteFill}
      ref={video}
      source={source}
      shouldPlay={shouldPlay}
      resizeMode={ResizeMode.COVER}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    />
  );
}
