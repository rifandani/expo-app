import { useEffect } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type IUseSkeletonAnimationProps = {
  speed?: number;
  targetOpacityValue?: number;
};

/**
 * @returns animated style
 */
export function useSkeletonAnimation({
  speed = 1000,
  targetOpacityValue = 0.2,
}: IUseSkeletonAnimationProps) {
  const shared = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(shared.value, [0, 1], [targetOpacityValue, 1]),
  }));

  useEffect(() => {
    shared.value = withRepeat(withTiming(1, { duration: speed }), Infinity, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return animatedStyle;
}
