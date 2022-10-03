import { colours, fonts } from '@/config';
import locale from '@/localisation';
import React, { FC, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './icon';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { hapticSuccess } from '@/core';

interface iPanEvent {
  nativeEvent: { translationX: number; velocityX: number };
}

interface iSlideProps {
  label: string;
  releaseLabel: string;
  disabled?: boolean;
  onSuccess: () => void;
  colour?: string;
}

const Slide: FC<iSlideProps> = ({ disabled, label, releaseLabel, onSuccess, colour }) => {
  const width = useRef(0);
  const widthAnim = useSharedValue(1);
  const transition = useSharedValue(0);

  const overThreshold = useRef(false);

  const _handleSuccess = () => {
    onSuccess();
    setTimeout(() => {
      transition.value = withTiming(0);
    }, 750);
  };

  const _handleLayout = ({ nativeEvent }: any) => {
    width.current = nativeEvent.layout.width;
    widthAnim.value = nativeEvent.layout.width;
  };

  const _handlePan = ({ nativeEvent: { translationX } }: iPanEvent) => {
    const val = Math.max(0, translationX);
    transition.value = val;
    const _active = val > width.current * 0.5;
    if (_active && !overThreshold.current) {
      hapticSuccess();
    }
    overThreshold.current = _active;
  };

  const _handleEnded = ({ nativeEvent: { translationX, velocityX } }: iPanEvent) => {
    if (Math.abs(translationX) > width.current * 0.4) {
      transition.value = withTiming(width.current, { duration: 120 });
      _handleSuccess();
    } else transition.value = withSpring(0, { velocity: velocityX });
  };

  const overlayStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: transition.value }],
    opacity: 1 - transition.value / widthAnim.value,
  }));
  const releaseStyles = useAnimatedStyle(() => ({
    opacity: transition.value / widthAnim.value,
  }));

  return (
    <View
      onLayout={_handleLayout}
      style={[styles.wrapper, disabled && styles.disabled, { backgroundColor: colour ?? colours.dark.primary }]}
    >
      <PanGestureHandler onGestureEvent={_handlePan} onEnded={_handleEnded as any}>
        <Animated.View style={[styles.content, overlayStyles]}>
          <Text style={[styles.label]}>{locale(label)}</Text>
          <View style={styles.icon}>
            <Icon width={24} height={24} color={colours.dark.color} icon='chevron-right' />
          </View>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View pointerEvents='none' style={[styles.content, releaseStyles]}>
        <Text style={[styles.label]}>{locale(releaseLabel)}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: colours.dark.primary,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    overflow: 'hidden',
  },
  label: {
    color: colours.dark.color,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: fonts.primary.medium,
    fontSize: 14,
  },

  icon: {
    position: 'absolute',
    left: 16,
  },
  disabled: { opacity: 0.6 },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Slide;
