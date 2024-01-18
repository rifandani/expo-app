import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

type Props = {
  onLoaded: () => void;
  onFinish: () => void;
};

/**
 * load video playback asset as splash screen
 */
export function SplashVideo({ onLoaded, onFinish }: Props) {
  const video = useRef<Video>(null);
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const { width } = useWindowDimensions();

  const isTablet = useMemo(() => width >= 768, [width]);
  const source = useMemo(
    () =>
      isTablet ? require('../../assets/splash-tablet.mp4') : require('../../assets/splash.mp4'),
    [isTablet]
  );
  const shouldPlay = useMemo(
    () => !(lastStatus.isLoaded && lastStatus.didJustFinish),
    [lastStatus]
  );

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
