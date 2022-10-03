import { colours } from '@/config';
import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

interface iBackdropProps {
  transition: Animated.SharedValue<number>;
  onPop?: () => void;
}
const Backdrop: FC<iBackdropProps> = ({ transition, onPop }) => {
  const style = useAnimatedStyle(() => ({
    opacity: transition.value * 0.85,
  }));
  return (
    <Animated.View style={[styles.wrapper, style]}>
      <Pressable onPress={onPop} style={styles.pressable} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colours.dark.black,
    opacity: 0.85,
  },
  pressable: {
    flex: 1,
  },
});

export default Backdrop;
