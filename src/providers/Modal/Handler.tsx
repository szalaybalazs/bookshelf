import { colours } from '@/config';
import React, { FC, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

interface iHandlerProps {
  timeout: Animated.SharedValue<number>;
  onPan: (translation: number, velocity: number) => void;
  onPanEnded: (translation: number, velocity: number) => void;
}

interface iPanEvent {
  nativeEvent: { translationY: number; velocityY: number };
}

const Handler: FC<iHandlerProps> = ({ timeout, onPan, onPanEnded }) => {
  const handlerStyle = useAnimatedStyle(() => ({
    width: timeout.value * 48,
  }));

  const _handlePan = useCallback(({ nativeEvent: { translationY, velocityY } }: iPanEvent) => {
    onPan(translationY, velocityY);
  }, []);

  const _handleEnded = ({ nativeEvent: { translationY, velocityY } }: iPanEvent) => {
    onPanEnded(translationY, velocityY);
  };
  return (
    <PanGestureHandler onGestureEvent={_handlePan} onEnded={_handleEnded as any}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.backdrop} />
          <Animated.View style={[styles.handler, handlerStyle]} />
        </View>
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
    paddingBottom: 24,
    alignItems: 'center',
  },
  container: {},
  backdrop: {
    width: 48,
    height: 3,
    borderRadius: 500,
    backgroundColor: colours.dark.foreground,
    opacity: 0.2,
  },
  handler: {
    width: 24,
    height: 3,
    borderRadius: 500,
    backgroundColor: colours.dark.color,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.2,
  },
});

export default Handler;
