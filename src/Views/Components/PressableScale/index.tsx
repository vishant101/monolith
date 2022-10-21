import React, {ReactElement} from 'react';
import {Pressable} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

type Props = {
  children: ReactElement;
  onPress: () => void;
  opactiyTo?: number;
  scaleTo?: number;
  disabled?: boolean;
};

const TimingConfig = {duration: 50};

const PressableScale = ({
  onPress,
  children,
  scaleTo = 0.97,
  opactiyTo = 0.7,
  disabled = false,
}: Props) => {
  const pressed = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return pressed.value
      ? withTiming(1, TimingConfig)
      : withTiming(0, TimingConfig);
  });
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1],
      [1, scaleTo],
      Extrapolate.CLAMP,
    );

    const opactity = interpolate(
      progress.value,
      [0, 1],
      [1, opactiyTo],
      Extrapolate.CLAMP,
    );

    return {
      opacity: opactity,
      transform: [{scale}],
    };
  });

  return (
    <Pressable
      onPressIn={() => {
        pressed.value = true;
      }}
      onPressOut={() => {
        pressed.value = false;
      }}
      onPress={onPress}
      disabled={disabled}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </Pressable>
  );
};

export default PressableScale;
