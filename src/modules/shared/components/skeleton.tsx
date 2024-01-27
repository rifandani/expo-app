import React, { ComponentPropsWithoutRef } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useSkeletonAnimation } from '#shared/hooks/use-animate-skeleton';

type Props = {
  loaderStyle?: ComponentPropsWithoutRef<typeof Animated.View>['style'];
  numberOfItems?: number;
  direction?: 'row' | 'column';
  speed?: number;
  targetOpacityValue?: number;
};

/**
 * @example
 *
 * if (loading) {
 *   return <Skeleton loaderStyle={{ width: 100, height: 100, backgroundColor: 'white' }} numberOfItems={1} />;
 * }
 */
export function Skeleton({
  loaderStyle = {},
  numberOfItems = 3,
  direction = 'row',
  speed = 1_000,
  targetOpacityValue = 0.2,
}: Props) {
  const animatedStyle = useSkeletonAnimation({ speed, targetOpacityValue });

  return (
    <View style={{ flexDirection: direction }}>
      {Array.from({ length: numberOfItems }, (_, idx) => (
        <Animated.View key={`animated-view-${idx}`} style={[loaderStyle, animatedStyle]} />
      ))}
    </View>
  );
}
